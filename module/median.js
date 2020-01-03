const {
    Median
} = require('../models');
const Random = require('../module/random');
const Op = require('sequelize').Op;
const Exchange = require('../module/exchange');

const promise = async (json, start, result) => {
    result[start / 3].info = json.slice(start, start + 3);
}

module.exports = {
    foodRead: async ({
        CityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            try {
                const test = await Median.findAll({
                    where: {
                        category: {
                            [Op.notLike]: "%호텔%"
                        },
                        cityId: CityId,
                    },
                    attributes: ['cityId', 'category', 'cost', 'urlFood'],
                });
                for (let i = 0; i < 3; i++) {
                    const bmp = test[i].dataValues;
                    const obj = new Object();
                    obj.category = bmp.category;
                    obj.cost = parseInt((bmp.cost * 1164.63).toFixed(0));
                    obj.url = bmp.urlFood
                    result.push(obj);
                }
                resolve({
                    result
                })
            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },
    hotelRead: async ({
        CityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            try {
                const test = await Median.findAll({
                    where: {
                        category: {
                            [Op.like]: "%호텔%"
                        },
                        cityId: CityId,
                        
                    },
                    order: [
                        ['id', 'DESC'],
                    ],
                    attributes: ['cityId', 'category', 'cost', 'urlHotel'],
                });
                for (let i = 0; i < 4; i++) {
                    const bmp = test[i].dataValues;
                    const obj = new Object();
                    obj.category = bmp.category;
                    obj.cost = parseInt((bmp.cost * 1164.63).toFixed(0));
                    console.log("obj : ",obj.cost, bmp.cost );
                    obj.url = bmp.urlHotel
                    obj.info = [];
                    result.push(obj);
                }
                await Random.randomHotel({CityId})
                    .then(async ({
                        json
                    }) => {
                        Promise.all([promise(json, 0, result), promise(json, 3, result), promise(json, 6, result), promise(json, 9, result)]).then(function () {
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
    hotelReadiOS: async ({
        CityId,
        subCategory
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            let cate;
            try {
                if(subCategory == 5) {
                    cate = "최고급호텔";
                }
                else if(subCategory == 4) {
                    cate = "고급호텔";
                }
                else if(subCategory == 3) {
                    cate = "일반호텔";
                }
                else{
                    cate = "저가호텔";
                }
                const test = await Median.findAll({
                    where: {
                        category: cate,
                        cityId: CityId,
                    },
                    attributes: ['cityId', 'category', 'cost', 'urlHotel'],
                });
                    const bmp = test[0].dataValues;
                    const obj = new Object();
                    obj.category = bmp.category;
                    obj.cost = parseInt((bmp.cost * 1164.63).toFixed(0));
                    obj.url = bmp.urlHotel
                    obj.info = [];
                    result.push(obj);
                await Random.randomHoteliOS({CityId, subCategory})
                    .then(async ({
                        json
                    }) => {
                        Promise.all([promise(json, 0, result)]).then(function () {
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

    foodReadex: async ({
        CityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            try {
                let ex;
                await Exchange.exchange({
                    base: "USD",
                    to: "KRW"
                }).then(({
                    result
                }) => {
                    ex = result
                }).catch(err => {
                    console.log(err)
                })
                const test = await Median.findAll({
                    where: {
                        category: {
                            [Op.notLike]: "%호텔%"
                        },
                        cityId: CityId,
                    },
                    attributes: ['cityId', 'category', 'cost', 'urlFood'],
                });
                for (let i = 0; i < 3; i++) {
                    const bmp = test[i].dataValues;
                    const obj = new Object();
                    obj.category = bmp.category;
                    console.log("bmp.cost ",bmp.cost);
                    obj.cost = parseInt((ex*bmp.cost).toFixed(0));
                    obj.url = bmp.urlFood
                    result.push(obj);
                }
                resolve({
                    result
                })
            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },
    hotelReadex: async ({
        CityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            try {
                let ex;
                await Exchange.exchange({
                    base: "USD",
                    to: "KRW"
                }).then(({
                    result
                }) => {
                    ex = result
                }).catch(err => {
                    console.log(err)
                })
                const test = await Median.findAll({
                    where: {
                        category: {
                            [Op.like]: "%호텔%"
                        },
                        cityId: CityId,
                    },
                    order: [
                        ['id', 'DESC'],
                    ],

                    attributes: ['cityId', 'category', 'cost', 'urlHotel'],
                });
                for (let i = 0; i < 4; i++) {
                    const bmp = test[i].dataValues;
                    const obj = new Object();
                    obj.category = bmp.category;
                    //  obj.cost = bmp.cost;
                    console.log("bmp.cost ", bmp.cost);
                    obj.cost = parseInt((ex*bmp.cost).toFixed(0));
                    obj.url = bmp.urlHotel;
                    obj.info = [];
                    result.push(obj);
                }
                await Random.randomHotelex({
                        CityId
                    })
                    .then(async ({
                        json
                    }) => {
                        Promise.all([promise(json, 0, result), promise(json, 3, result), promise(json, 6, result), promise(json, 9, result)]).then(function () {
                            console.log("result[0] : ", result[0].info);
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
    hotelReadiOSex: async ({
        CityId,
        subCategory
    }) => {
        return new Promise(async (resolve, reject) => {
            const result = [];
            let cate;
            try {
                let ex;
                await Exchange.exchange({
                    base: "USD",
                    to: "KRW"
                }).then(({
                    result
                }) => {
                    ex = result
                }).catch(err => {
                    console.log(err)
                })
                if (subCategory == 5) {
                    cate = "최고급호텔";
                } else if (subCategory == 4) {
                    cate = "고급호텔";
                } else if (subCategory == 3) {
                    cate = "일반호텔";
                } else {
                    cate = "저가호텔";
                }
                const test = await Median.findAll({
                    where: {
                        category: cate,
                        cityId: CityId,
                    },
                    attributes: ['cityId', 'category', 'cost', 'urlHotel'],
                });
                const bmp = test[0].dataValues;
                const obj = new Object();
                obj.category = bmp.category;
                //  obj.cost = bmp.cost;
                console.log("bmp.cost ", bmp.cost);
                obj.cost = parseInt((ex*bmp.cost).toFixed(0))
                console.log(obj.cost);
                obj.url = bmp.urlHotel
                obj.info = [];
                result.push(obj);
                await Random.randomHoteliOSex({
                        CityId,
                        subCategory
                    })
                    .then(async ({
                        json
                    }) => {
                        Promise.all([promise(json, 0, result)]).then(function () {
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
