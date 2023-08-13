const mongoose = require('../config/mongo');

const experienceSchema = new mongoose.Schema({
    company: String,
    position: String,
    date: String,
    description: String,
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
