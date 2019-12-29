const express = require('express');
const userController = require('../User/controller');
const router = express.Router({mergeParams: true});

router.post('/signup', userController.signup); 
router.post('/signin', userController.signin); 

module.exports = router;