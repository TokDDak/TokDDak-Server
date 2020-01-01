const express = require('express');
const router = express.Router({mergeParams: true});
const TSController = require('../TripSnack/controller');

router.get('/:TripId', TSController.read);
router.get('/:TripId', TSController.create);
router.get('/', TSController.update);
router.get('/', TSController.delete);


 module.exports = router;