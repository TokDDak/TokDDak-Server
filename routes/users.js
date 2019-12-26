const express = require('express');
const router = express.Router();
const utils = require('../module/util/utils');
const statusCode = require('../module/util/statusCode');
const responseMessage = require('../module/util/responseMessage');
const User = require('../models/userModel');
const encrypt = require('../module/encryption');
const jwt = require('../module/jwt');

router.post('/signup', (req, res) => {
    const {id, password, name, email, phone} = req.body;

    if(!id || !password || !name || !email || !phone) {
        const missParameters = Object.entries({id, password, name, email, phone})
        .filter(it => it[1] == undefined).map(it => it[0]).join(',');
        res.status(statusCode.BAD_REQUEST)
        .send(utils.successFalse(`${responseMessage.NULL_VALUE} ${missParameters}`));
        return;
    }
    encrypt.encrypt(password)
    .then(({hashed, salt}) => User.signup({id, name, email, phone, salt, password: hashed}))
    .then(({code, json}) => res.status(code).send(json))
    .catch(err => {
        res.status(statusCode.INTERNAL_SERVER_ERROR)
        .send(utils.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
});

router.post('/signin', async (req, res)=>{
  const {id, password} = req.body;
  if(!id || !password){
    res.status(statusCode.BAD_REQUEST).send(utils.successFalse(responseMessage.NULL_VALUE));
  }
  try {
    const {code, json} = await User.signin({id, password});
   // res.status(code).send(json);
    const dummy = req.body;
    const result = jwt.sign(dummy); //토큰발급 
    res.json(result);
  }catch(err){
    console.log(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(utils.successFalse(responseMessage.SIGNIN_FAIL));
  }
})

module.exports = router;