const express = require('express');
const router = express.Router();

const AbilityController = require('../controllers/AbilityController');

router.get('/abilities', AbilityController.find);
router.post('/abilities', AbilityController.save);
router.delete('/abilities/:id', AbilityController.findByIdAndDelete);

module.exports = router;
