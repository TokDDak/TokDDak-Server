const {
    Median
} = require('../models');
const Random = require('../module/random');
const Op = require('sequelize').Op;
module.exports = {
    hotelRead: async ({
        cityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            let subCategory = 2;
            const obj = new Object();
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
                
                await test.forEach(async (buffer) => {
                    
                    const bmp = buffer.dataValues;
                    const CityId = bmp.cityId;
                    obj.category = bmp.category;
                    obj.cost = bmp.cost;
                    await Random.randomHotel({
                            CityId,
                            subCategory
                        })
                        .then(({
                            json
                        }) => {
                            obj.info = json;
                            subCategory += 1;
                            obj.url = bmp.urlHotel
                            result.push(obj);
                        }).catch(err =>
                            console.log(err))
                })
                resolve({
                    result
                });
            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },
}