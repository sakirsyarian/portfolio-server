const mongoose = require('../config/mongo');

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: [String],
    test: Boolean,
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
