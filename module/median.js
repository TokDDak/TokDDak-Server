const {
    Median
} = require('../models');
const Random = require('../module/random');
const Op = require('sequelize').Op;

const promise = async (json, start, result) => {
    result[start/3].info = json.slice(start, start+3);
}

module.exports = {
    hotelRead: async ({
        cityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            const infoArr = [];
            let subCategory = 2;
            const CityId = cityId;
            //            const categoryArr = ['저가호텔', '일반호텔', '고급호텔', '최고급호텔'];
            try {
                const test = await Median.findAll({
                    where: {
                        category: {
                            [Op.like]: "%호텔%"
                        },
                        cityId: cityId,
                    },
                    attributes: ['cityId', 'category', 'cost', 'urlHotel'],
                });
                for (let i = 0; i < 4; i++) {
                    const bmp = test[i].dataValues;
                    const obj = new Object();
                    obj.category = bmp.category;
                    obj.cost = bmp.cost;
                    obj.url = bmp.urlHotel
                    obj.info = [];
                    result.push(obj);
                }
                await Random.randomHotel()
                    .then(async ({
                        json
                    }) => {
                        Promise.all([promise(json, 0, result), promise(json, 3, result), promise(json, 6, result), promise(json, 9, result)]).then(function () {
                            console.log(result[1].info);
                            resolve({
                                result
                            })
                        })

                    }).catch(err =>
                        console.log(err))
            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },
}
