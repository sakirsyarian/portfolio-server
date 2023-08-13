const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const testimonialRouter = require('./testimonialRoute');
const abilityRouter = require('./abilityRoute');
const projectRouter = require('./projectRoute');

router.get('/', Controller.home);
router.use(testimonialRouter);
router.use(abilityRouter);
router.use(projectRouter);

module.exports = router;
