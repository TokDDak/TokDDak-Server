const express = require('express');
const router = express.Router({mergeParams: true});
const TSController = require('../TripSnack/controller');

router.get('/:TripId', TSController.read);
router.post('/:TripId', TSController.create);
router.put('/', TSController.update);
router.delete('/', TSController.delete);


 module.exports = router;