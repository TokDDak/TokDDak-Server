const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {
    User
} = require('../models');

const encrypt = require('../module/encryption');
const jwt = require('../module/jwt');

module.exports = {
        signup: ({
            email,
            nickname,
            password
        }) => {
            return new Promise(async (resolve, reject) => {
                const encrypta = await encrypt.encrypt(password);
                console.log("encrypta :", encrypta);
                let user;
                try {
                    user = await User.create({
                        email: email,
                        nickname: nickname,
                        salt : encrypta.salt,
                        password: encrypta.hashed

                    });
                } catch (error) {
                    reject({
                        json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.JOIN_FAIL)
                    });
                }
                resolve({
                    json: utils.successTrue(sc.SUCCESS, rm.JOIN_SUCCESS, user)
                });
            });
        },
        signin: ({
            email,
            password,
            dummy
        }) => {
            return new Promise(async (resolve, reject) => {
                const user = await User.findOne({
                    where: {
                        email: email
                    }
                });
               // console.log(user);
                const {
                    hashed
                } = await encrypt.encryptWithSalt(password, user.salt);

                try{
                    if (user.length == 0) {
                        reject({
                            json: utils.successFalse(sc.NO_CONTENT, rm.NO_EMAIL)
                        });
                        return;
                    }
    
                    if (user.password != hashed) {
                        reject({
                            json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.MISS_MATCH_PASSWORD)
                        });
                        return;
                    }
                     const result = jwt.sign(dummy); //토큰발급 
                     console.log(result);


                }
                catch(err)
                {
                    
                    reject({
                        json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR)
                    });
                }
               
                //console.log(result);
                resolve({
                    json: utils.successTrue(sc.SUCCESS, rm.HOTEL_READ_CITYID_SUCCESS, user)
                });
            })

        }
    }