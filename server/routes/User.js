const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const passportConfig = require('../passport');
const User = require('../models/User');

const signToken = (userID) => {
    return JWT.sign({
        iss: "AlumniConnect",
        sub: userID
    }, "AlumniConnect", {expiresIn: "1h"});
}

userRouter.post('/register', (req, res) => {
    const {username, password, role} = req.body;
    User.findOne({username})
        .then(user => {
            if(user)
                res.status(400).json({message : {msgBody : "Username already taken", msgError: true}});    
            else{
                const newUser = new User({username, password, role});
                newUser.save()
                        .then(doc => res.status(201).json({message : {msgBody :'Account Successfully Created', msgError: false}}))
                        .catch(err => res.status(500).json({message : {msgBody :'Error has occured', msgError: true}}))
            }  
        })
        .catch(err => {
            if(err)
                res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
        })
});

userRouter.post('/login', passport.authenticate('local', {session: false}), (req, res) => {
    if(req.isAuthenticated()){
        const {_id, username, role} = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated: true, user: {username, role}, message: {msgBody: "Successfully logged in", msgError: false}});
    }else{
        res.status(500).json({isAuthenticated: false, user: {username: "", role: ""}, message: {msgBody: "Login failed", msgError: true}})
    }
});

userRouter.get('/logout', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.clearCookie('access_token');
    res.json({user: {username: "", role:""}, success: true});
});

userRouter.get('/admin', passport.authenticate('jwt', {session: false}), (req, res) => {
    if(req.user.role === 'admin'){
        res.status(200).json({message: {msgBody: "You are an admin", msgError: false}});
    }else{
        res.status(403).json({message: {msgBody: "You are not an admin", msgError: true}});
    }
});

userRouter.get('/authenticated', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {username, role} = req.user;
    res.status(200).json({isAuthenticated: true, user: {username, role}});
});

module.exports = userRouter;

