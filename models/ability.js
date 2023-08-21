const mongoose = require('../config/mongo');

const abilitySchema = new mongoose.Schema({
    queue: Number,
    icon: String,
    name: String,
    category: String,
});

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;
