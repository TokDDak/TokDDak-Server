const express = require('express');
const router = express.Router({mergeParams: true});
const THController = require('../TripHotel/controller');

router.get('/:TripId', THController.read);
router.post('/:TripId', THController.create);
router.put('/', THController.update);
router.delete('/', THController.delete);


 module.exports = router;