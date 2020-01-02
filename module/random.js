const {
    Food,
    Hotel
} = require('../models');
const Exchange = require('../module/exchange');

module.exports = {
    randomFood: async ({
        CityId
    }) => { //subCategory
        return new Promise(async (resolve, reject) => {
            const data = [];
            let i = 0;
            try {
                const promise = async (
                    grade,
                    CityId
                ) => {
                    cate = await Food.findAll({
                        where: {
                            grade: grade,
                            CityId: CityId
                        },
                        attributes: ['name', 'cost'],
                    });
                    const start = (grade - 1) * 3;
                    for (i = start; i < start + 3; i++) {
                        random = Math.floor(Math.random() * (cate.length - 0));
                        data[i] = cate[random].dataValues;

                        Exchange.exchange({
                            base: "USD",
                            cost: cate[random].cost,
                            to: "KRW"
                        }).then(({
                            result
                        }) => {
                            data[i].cost  = result
                            console.log(obj.cost)
                        }).catch(err => {
                            console.log(err)
                        })
                        
                    }
                }
                Promise.all([promise(1, CityId), promise(2, CityId), promise(3, CityId)]).then(function () {
                    resolve({
                        json: data
                    })
                })

            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },

    randomHotel: async ({
        CityId
    }) => { //subCategory
        return new Promise(async (resolve, reject) => {
            const data = [];
            let i = 0;
            try {
                const promise = async (
                    subCategory,
                    CityId
                ) => {
                    cate = await Hotel.findAll({
                        where: {
                            subCategory: subCategory,
                            CityId: CityId
                        },
                        attributes: ['name', 'cost'],
                    });
                    const start = (subCategory - 2) * 3;
                    for (i = start; i < start + 3; i++) {
                        random = Math.floor(Math.random() * (cate.length - 0));
                        data[i] = cate[random].dataValues;
                        
                        Exchange.exchange({
                            base: "USD",
                            cost: cate[random].cost,
                            to: "KRW"
                        }).then(({
                            result
                        }) => {
                            data[i].cost  = result
                            console.log(obj.cost)
                        }).catch(err => {
                            console.log(err)
                        })
                        
                    }
                }
                Promise.all([promise(2, CityId), promise(3, CityId), promise(4, CityId), promise(5, CityId)]).then(function () {
                    resolve({
                        json: data
                    })
                })

            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },
}