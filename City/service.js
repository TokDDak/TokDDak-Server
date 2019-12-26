const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const { City } = require('../models');

module.exports = {
    readAll: () => {
        return new Promise(async (resolve, reject) => {
            const city = await City.findAll({});
            if(city.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_EMPTY)
                });
                return;
            }
            if (!city) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_ALL_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_ALL_SUCCESS, city)
            });
        });
    },
    countryRead: ({
        country
    }) => {
        return new Promise(async (resolve, reject) => {
            const city = await City.findAll({
                where: {
                    country : country,
                },
            });
            if(city.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!city) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_BLOGIDX_SUCCESS, transportation)
            });
        });
    },
    create: ({
        continent,
        country,
        name
    }) => {
        return new Promise(async (resolve, reject) => {
            let city;
            try {
                city = await City.create({
                    continent : continent,
                    country : country,
                    name : name
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_CREATE_SUCCESS, city)
            });
        });
    },
    update: ({
        cityIdx,
        continent,
        country,
        name
    }) => {
        return new Promise(async (resolve, reject) => {
            const city = await City.update({
                continent : continent,
                country : country,
                name : name
            }, {
                where: {
                    cityIdx: cityIdx
                },
            });
            if (!city) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_UPDATE_SUCCESS) // 성공했을때가 안돼,,, 실패는 됏
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            try {
                city = await City.destroy({
                    where:{
                        id:id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_DELETE_SUCCESS)
            });
        });
    },
};