const express = require('express');
const router = express.Router({mergeParams: true});
const TimelineController = require('../Timeline/controller');

router.get('/', TimelineController.read); 
router.post('/',TimelineController.create);
router.put('/',TimelineController.update); 
router.delete('/',TimelineController.delete); 
module.exports = router;