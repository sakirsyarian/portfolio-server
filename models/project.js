const mongoose = require('../config/mongo');

const projectSchema = new mongoose.Schema({
    image: String,
    name: String,
    tags: [String],
    description: String,
    github: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
