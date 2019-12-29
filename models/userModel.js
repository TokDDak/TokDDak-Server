const utils = require('../module/util/utils');
const statusCode = require('../module/util/statusCode');
const responseMessage = require('../module/util/responseMessage');
const pool = require('../module/poolAsync');
const encrypt = require('../module/encryption');

module.exports = {
    signin: ({
        id,
        password
    }) => {
        const table = 'user';
        const query = `SELECT * FROM ${table} WHERE id = '${id}'`;
        return pool.queryParam_None(query)
            .then(async (userResult) => {
                console.log(userResult);
                if (userResult.length == 0) {
                    return {
                        code: statusCode.BAD_REQUEST,
                        json: utils.successFalse(responseMessage.NO_USER)
                    };
                }
                const user = userResult[0];
                const {
                    hashed
                } = await encrypt.encryptWithSalt(password, user.salt);
                if (user.password != hashed) {
                    return {
                        code: statusCode.BAD_REQUEST,
                        json: utils.successFalse(responseMessage.MISS_MATCH_PW)
                    };
                }
                // 로그인 성공
                return {
                    code: statusCode.OK,
                    json: utils.successTrue(responseMessage.SIGN_IN_SUCCESS)
                }
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    signup: ({
        id,
        password,
        salt,
        name,
        email,
        phone
    }) => {
        const table = 'user';
        const fields = 'id, name, password, salt, email, phone';
        const questions = `?, ?, ?, ?, ?, ?`;
        const values = [id, name, password, salt, email, phone];
        return pool.queryParam_Parse(`INSERT INTO ${table}(${fields}) VALUES(${questions})`, values)
            .then(result => {
                if (result.code && result.json) return result;
                const userId = result.insertId;
                return {
                    code: statusCode.OK,
                    json: utils.successTrue(responseMessage.SIGN_UP_SUCCESS, userId)
                };
            })
            .catch(err => {
                // ER_DUP_ENTRY
                if(err.errno == 1062){
                    console.log(err.errno, err.code);
                    return {
                        code: statusCode.BAD_REQUEST,
                        json: utils.successFalse(responseMessage.ALREADY_ID)
                    };
                }
                console.log(err);
                throw err;
            });
    }
};