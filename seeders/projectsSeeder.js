const Project = require('../models/project');
const projectsData = require('../data/project.json');

Project.create(projectsData)
    .then((projects) => console.log(projects))
    .catch((error) => console.log(error));
