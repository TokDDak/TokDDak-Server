const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/citys', require('./citys'));
router.use('/users', require('./users'));
router.use('/trips', require('./trips'));
// router.use('/median',require('./medianTest'));
router.use('/median', require('./median'))
module.exports = router;