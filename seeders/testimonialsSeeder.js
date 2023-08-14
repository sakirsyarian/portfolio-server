const Testimonial = require('../models/testimonial');
const testimonialsData = require('../data/testimonial.json');

Testimonial.create(testimonialsData)
    .then((testimonials) => console.log(testimonials))
    .catch((error) => console.log(error));
