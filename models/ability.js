const mongoose = require('../config/mongo');

const abilitySchema = new mongoose.Schema({
    queue: Number,
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
    date: {
        type: Date,
        default: Date.now,
    },
});

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;
