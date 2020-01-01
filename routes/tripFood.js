const express = require('express');
const router = express.Router({mergeParams: true});
const TFController = require('../TripFood/controller');

router.get('/:TripId', TFController.read);
router.get('/:TripId', TFController.create);
router.get('/', TFController.update);
router.get('/', TFController.delete);

 module.exports = router;