const express = require('express');
const router = express.Router();

const TestimonialController = require('../controllers/testimonialController');

router.get('/', TestimonialController.find);

module.exports = router;
