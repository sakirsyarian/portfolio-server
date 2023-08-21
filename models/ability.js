const mongoose = require('../config/mongo');

const abilitySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: String,
    test: Boolean,
});

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;
