const request = require('request');
const utils = require('./util/utils');

module.exports = {
    exchange: ({base, to}) => {
        return new Promise(async (resolve, reject) => {
            let result = 1
            try{
                await request(`https://api.exchangerate-api.com/v4/latest/${base}`, function (error, response) {
                if (!response) {
                    resolve({
                        json: utils.successFalse("api응답")
                    })
                }             
                body = response.body;
                const jsonBody = JSON.parse(body); //string to json
                to = to;
                h = jsonBody.rates;
                result = h[to];
                resolve({
                    result : result
                })
            })
            }catch(error)
            {
                reject({
                    json : utils.successFalse("환율 API 오류")
                })
            }
        })
    }
}