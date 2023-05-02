const express = require('express');
const responseRouter = express.Router();
const Response = require('../models/Response');

responseRouter.post('/create', (req, res) => {
    const {name, email ,evename} = req.body;

    const newResponse = new Response({name, email, evename});
    newResponse.save()
            .then(doc => res.status(201).json({message:"Event created successfully"}))
            .catch(err => {
                res.status(500).json({message:"An Error occured during event creation"})
            });
});

responseRouter.get('/get', (req, res) => {
    Response.find({})
         .then(events => {
            res.status(201).json(events);
         })
         .catch(err => {
            res.status(500).json({message:"An error occured while fetching events"})
         })
})

module.exports = responseRouter;
