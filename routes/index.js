const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/citys', require('./citys'));
//router.use('/trips', require('./trips'));
router.use('/users', require('./users'));
module.exports = router;