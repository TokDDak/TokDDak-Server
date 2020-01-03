const express = require('express');
const router = express.Router({mergeParams: true});
const TimelineController = require('../Timeline/controller');

router.get('/:TripId', TimelineController.read); 
router.post('/',TimelineController.create);
router.put('/:TripId',TimelineController.update); 
router.delete('/:TripId',TimelineController.delete); 
module.exports = router;