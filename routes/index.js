const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const testimonialRouter = require('./testimonialRoute');
const abilityRouter = require('./abilityRoute');

router.get('/', Controller.home);
router.use(testimonialRouter);
router.use(abilityRouter);

module.exports = router;
