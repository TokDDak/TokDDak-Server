const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/citys', require('./citys'));

module.exports = router;