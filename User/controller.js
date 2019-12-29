const UserService = require('./service');

const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const encrypt = require('../module/encryption');
const jwt = require('../module/jwt');

module.exports = {
    signup: async (req, res) => {
        const {
            email,
            nickname,
            password
        } = req.body;

        if (!email || !nickname || !password) {
            const missParameters = Object.entries({
                    email,
                    nickname,
                    password
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        UserService.signup({
                email,
                nickname,
                password
            })
            .then(({
                json
            }) => res.send(json))
            .catch(err => {
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR,rm.INTERNAL_SERVER_ERROR));
            });
    },
    signin: async (req, res) => {
        const {
            email,
            password
        } = req.body;

        if (!email || !password) {
            const missParameters = Object.entries({
                    email,
                    password
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        const dummy = req.body;
        // const result = jwt.sign(dummy); //토큰발급 
        // res.json(result);
        
        UserService.signin({
            email,
            password,
            dummy
        })
        .then(({
            json
        })=> res.send(json))
        .catch(err => {
            res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
        })

    }


}