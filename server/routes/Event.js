const express = require('express');
const eventRouter = express.Router();
const Event = require('../models/Event');

eventRouter.post('/create', (req, res) => {
    const {name, type, skills, description, from, to} = req.body;

    const newEvent = new Event({type, name, description, skills, from, to});
    newEvent.save()
            .then(doc => res.status(201).json({message:"Event created successfully"}))
            .catch(err => {
                res.status(500).json({message:"An Error occured during event creation"})
            });
});

module.exports = eventRouter;
