const express = require('express');
const router = express.Router();

const TestimonialController = require('../controllers/testimonialController');

router.get('/testimonials', TestimonialController.find);
router.post('/testimonials', TestimonialController.save);
router.delete('/testimonials/:id', TestimonialController.findByIdAndDelete);

module.exports = router;
