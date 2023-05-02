const express = require('express');
const pasteventRouter = express.Router();
const PastEvent = require('../models/PastEvent');

pasteventRouter.post('/create', (req, res) => {
    const {type, name, alumname, description, from, to, link} = req.body;

    const newPastEvent = new PastEvent({type, name, alumname, description, from, to, link});
    newPastEvent.save()
            .then(doc => res.status(201).json({message:"Event created successfully"}))
            .catch(err => {
                res.status(500).json({message:"An Error occured during event creation"})
                console.log(err);
            });
});

pasteventRouter.get('/get', (req, res) => {
    PastEvent.find({})
         .then(events => {
            res.status(201).json(events);
         })
         .catch(err => {
            res.status(500).json({message:"An error occured while fetching events"})
         })
})

module.exports = pasteventRouter;
