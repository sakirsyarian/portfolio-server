const mongoose = require('../config/mongo');

const projectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    tags: [String],
    description: String,
    github: {
        type: String,
        required: true,
    },
    test: Boolean,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
