const Experience = require('../models/experience');
const experiencesData = require('../data/experience.json');

Experience.create(experiencesData)
    .then((experiences) => console.log(experiences))
    .catch((error) => console.log(error));
