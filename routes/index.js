const express = require('express');
const router = express.Router();

router.use('/citys', require('./citys'));

module.exports = router;