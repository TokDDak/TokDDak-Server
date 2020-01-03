const express = require('express');
const router = express.Router({mergeParams: true});
const TFController = require('../TripFood/controller');

router.get('/:TripId', TFController.read);
router.post('/:TripId', TFController.create);
router.put('/', TFController.update);
router.delete('/', TFController.delete);

 module.exports = router;