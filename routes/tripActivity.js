const express = require('express');
const router = express.Router({mergeParams: true});
const TAController = require('../TripActivity/controller');

router.get('/:TripId', TAController.read);
router.post('/:TripId', TAController.create);

 module.exports = router;