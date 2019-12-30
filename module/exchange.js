const request = require('request');
const utils = require('./util/utils');

module.exports = {
    exchange: async (from, cost, to) => {
        return new Promise(async (resolve, reject) => {
            request(`https://api.exchangerate-api.com/v4/latest/${from}`, function (error, response) {
                console.log(response.body);
                body = response.body;
                const jsonBody = JSON.parse(body);
                to = to;
                h = jsonBody.rates;
                console.log("h[to] : ", h[to]);
                const result = cost * h[to];
                console.log("result : ", result);
            })
            .catch(err=>
                reject({
                    json : utils.succussFalse(err)
                })
                )
            resolve({
                json: utils.successTrue(result)
            })

        })
    }
}