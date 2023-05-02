const mongoose = require('mongoose');

const PastEventSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['internship', 'seminar', 'workshop', 'mentorship'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    alumname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
        required: true
    },
    link: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('PastEvent', PastEventSchema);