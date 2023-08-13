const express = require('express');
const router = express.Router();

const TestimonialController = require('../controllers/testimonialController');

router.get('/testimonials', TestimonialController.find);
router.post('/testimonials', TestimonialController.save);

module.exports = router;
