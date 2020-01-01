const jwt = require('./jwt');
const resMessage = require('./util/responseMessage');
const statusCode = require('./util/statusCode');
const util = require('./util/utils');

const middleware = {
    
    checkToken: async (req, res, next) => {
        var token = req.headers.token
        console.log("token: ", token)
        if (!token) {
            return res.json(util.successFalse(statusCode.BAD_REQUEST, "EMPTY_TOKEN"))
        }
        
        const user = jwt.verify(token)
        
        if (user == -3) {
            console.log(1);
            return res.json(util.successFalse(statusCode.UNAUTHORIZED, "EXPIRED_TOKEN"))
        }
        if (user == -2) {
            console.log(2);
            return res.json(util.successFalse(statusCode.UNAUTHORIZED, "INVALID_TOKEN"))
        }
        if (user.email== undefined) {
            console.log(3);
            return res.json(util.successFalse(statusCode.UNAUTHORIZED, "INVALID_TOKEN"))
        }
        req.decoded = user
        next()
    } 
}
module.exports = middleware