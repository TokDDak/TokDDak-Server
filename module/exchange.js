const request = require('request');
const utils = require('./util/utils');

module.exports = {
    exchange: ({base, cost, to}) => {
        return new Promise(async (resolve, reject) => {
            let result = 1
            try{
                await request(`https://api.exchangerate-api.com/v4/latest/${base}`, function (error, response) {
                if (!response) {
                    resolve({
                        json: utils.successFalse("api응답")
                    })
                }
                console.log(response.body);
                console.log("to : ", to)
                console.log("cost : ", cost)
                body = response.body;
                const jsonBody = JSON.parse(body); //string to json
                to = to;
                h = jsonBody.rates;
                console.log("h[to] : ", h[to]);
                result = cost * h[to];
                console.log("result : ", result);
                resolve({
                    result : result// await이 기능을 못해서 resolve를 안에 넣어야해!!! 
                })
            })



            }catch(error)
            {
                reject({
                    json : utils.successFalse("실패 35")
                })
            }
            


        })
    }
}