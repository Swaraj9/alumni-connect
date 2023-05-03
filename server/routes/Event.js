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

eventRouter.get('/get', (req, res) => {
    Event.find({})
         .then(events => {
            res.status(201).json(events);
         })
         .catch(err => {
            res.status(500).json({message:"An error occured while fetching events"})
         })
})

eventRouter.post('/delete', (req, res) => {
    const {name} = req.body;

    Event.deleteOne({name})
                .then(() => res.status(201).json({message:"Event deleted successfully"}))
                .catch(err => res.status(500).json({message: "An Error occured during event deletion"}));
})

module.exports = eventRouter;
