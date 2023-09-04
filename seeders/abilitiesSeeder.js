const Ability = require('../models/ability');
const abilitiesData = require('../data/ability.json');

Ability.create(abilitiesData)
    .then((abilities) => console.log(abilities))
    .catch((error) => console.log(error));
