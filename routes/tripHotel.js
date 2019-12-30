const express = require('express');
const router = express.Router({mergeParams: true});
const THController = require('../TripHotel');

router.get('/:TripId', THController.read);
router.get('/:TripId', THController.create);
router.get('/', THController.update);
router.get('/', THController.delete);


 module.exports = router;