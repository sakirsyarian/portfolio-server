const mongoose = require('../config/mongo');

const abilitySchema = new mongoose.Schema({
    icon: String,
    name: String,
    category: String,
});

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;
