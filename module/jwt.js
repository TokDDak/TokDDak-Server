const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
const {secretOrPrivateKey} = require('../config/jwtSecretKey');

const options = {
    algorithm: "HS256", //H256(algorithm)에 해당하는 header, payload, signiture가 있음(내정)
    expiresIn: "1h",
    issuer: "genie"
};

module.exports = {
    sign: (user) => {
        const payload = { 
            email : user.email,
            password : user.password
        };
        const result = {
            token: jwt.sign(payload, secretOrPrivateKey),
          //  refreshToken: randToken.uid(256)
        };
        return result;
    },
    verify: (token) => { 
        let decoded;
        try {
            decoded = jwt.verify(token, secretOrPrivateKey);
            console.log("de : ", decoded)
        } catch (err) {
            console.log("err : ", err.message)
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return -3;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                return -2;
            } else {
                console.log("invalid token");
                return -2;
            }
        }
        console.log("dkdk: ",decoded)
        return decoded;
        
    },
    refresh: (user) => {
        const payload = {
            idx: user.idx,
            grade: user.grade,
            name: user.name
        };
        return jwt.sign(payload, secretOrPrivateKey, options);
    }
};