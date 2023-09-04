const express = require('express');
const router = express.Router();

const ProjectController = require('../controllers/projectController');

router.get('/projects', ProjectController.find);
router.post('/projects', ProjectController.save);
router.delete('/projects/:id', ProjectController.findByIdAndDelete);

module.exports = router;
