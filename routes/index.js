const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const testimonialRouter = require('./testimonialRoute');

router.get('/', Controller.home);
router.use('/testimonials', testimonialRouter);

module.exports = router;
