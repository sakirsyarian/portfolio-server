const mongoose = require('../config/mongo');

const testimonialSchema = new mongoose.Schema({
    image: String,
    name: String,
    role: String,
    message: String,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
