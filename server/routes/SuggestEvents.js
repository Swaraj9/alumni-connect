const express = require('express');
const suggesteventRouter = express.Router();
const SuggestEvent = require('../models/SuggestEvent');

suggesteventRouter.post('/create', (req, res) => {
    const {name, type, skills, description, from, to} = req.body;

    const newSuggestEvent = new SuggestEvent({type, name, description, skills, from, to});
    newSuggestEvent.save()
            .then(doc => res.status(201).json({message:"Event created successfully"}))
            .catch(err => {
                res.status(500).json({message:"An Error occured during event creation"})
            });
});

suggesteventRouter.get('/get', (req, res) => {
    SuggestEvent.find({})
         .then(events => {
            res.status(201).json(events);
         })
         .catch(err => {
            res.status(500).json({message:"An error occured while fetching events"})
         })
})

module.exports = suggesteventRouter;
