const jwt = require('./jwt');
const resMessage = require('../utils/responseMessage');
const statusCode = require('../utils/statusCode');
const util = require('../utils/utils');

const middleware = {
    
    checkToken: async (req, res, next) => {
        var token = req.headers.jwt
        if (!token) {
            return res.json(util.successFalse(statusCode.BAD_REQUEST, resMessage.EMPTY_TOKEN))
        }
        const user = jwt.verify(token)
        if (user == this.TOKEN_EXPIRED) {
            return res.json(util.successFalse(statusCode.UNAUTHORIZED, resMessage.EXPIRED_TOKEN))
        }
        if (user == this.TOKEN_INVALID) {
            return res.json(util.successFalse(statusCode.UNAUTHORIZED, resMessage.INVALID_TOKEN))
        }
        if (user.idx == undefined) {
            return res.json(util.successFalse(statusCode.UNAUTHORIZED, resMessage.INVALID_TOKEN))
        }
        req.decoded = user
        next()
    } 
}
module.exports = middleware