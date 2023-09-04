const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const testimonialRouter = require('./testimonialRoute');
const abilityRouter = require('./abilityRoute');
const projectRouter = require('./projectRoute');
const experienceRouter = require('./experienceRoute');

router.get('/', Controller.home);
router.use(testimonialRouter);
router.use(abilityRouter);
router.use(projectRouter);
router.use(experienceRouter);

module.exports = router;
