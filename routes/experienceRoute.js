const express = require('express');
const router = express.Router();

const ExperinceController = require('../controllers/experienceController');

router.get('/experiences', ExperinceController.find);
router.post('/experiences', ExperinceController.save);
router.delete('/experiences/:id', ExperinceController.findByIdAndDelete);

module.exports = router;
