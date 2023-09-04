const mongoose = require('../config/mongo');

const testimonialSchema = new mongoose.Schema({
    image: String,
    name: {
        type: String,
        required: true,
    },
    role: String,
    message: {
        type: String,
        required: true,
    },
    test: Boolean,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
