const mongoose = require('mongoose');

const SuggEventSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['internship', 'seminar', 'workshop', 'mentorship'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
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
    }
})

module.exports = mongoose.model('SuggestEvent', SuggEventSchema);