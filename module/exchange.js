const request = require('request');
const utils = require('./util/utils');

module.exports = {
    exchange: async (base, cost, to) => {
        return new Promise(async (resolve, reject) => {
            try {
                request(`https://api.exchangerate-api.com/v4/latest/${base}`, function (error, response) {
                if(!response)
                {
                    resolve({
                        json : utils.successFalse("api응답")
                    })
                }
                console.log(response.body);
                body = response.body;
                const jsonBody = JSON.parse(body);
                to = to;
                h = jsonBody.rates;
                console.log("h[to] : ", h[to]);
                const result = cost * h[to];
                console.log("result : ", result);
            })
            resolve({
                json : utils.successTrue(result) // 왜전달을 못할까??
            }) 
            } catch (error) {
                console.log(error);
                reject(error)
            }

        })
    }
}