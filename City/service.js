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
                    json: utils.successFalse(sc.NO_CONTENT, rm.CITY_EMPTY)
                });
                return;
            }
            if (!city) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.CITY_READ_ALL_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.CITY_READ_ALL_SUCCESS, city)
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
                    json: utils.successFalse(sc.NO_CONTENT, rm.CITY_EMPTY)
                });
                return;
            }
            if (!city) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.CITY_READ_COUNTRY_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.CITY_READ_COUNTRY_SUCCESS, city)
            });
        });
    },
    create: ({
        continent,
        country,
        name,
        popular,
        recommend,
        img
    }) => {
        return new Promise(async (resolve, reject) => {
            let city;
            try {
                city = await City.create({
                    continent : continent,
                    country : country,
                    name : name,
                    popular : popular,
                    recommend : recommend,
                    img : img
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.CITY_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.CITY_CREATE_SUCCESS, city)
            });
        });
    },
    update: ({
        id,
        continent,
        country,
        name,
        popular,
        recommend,
        img
    }) => {
        return new Promise(async (resolve, reject) => {
            const city = await City.update({
                continent : continent,
                country : country,
                name : name,
                popular : popular,
                recommend : recommend,
                img : img
            }, {
                where: {
                    id : id
                },
            });
            if (!city) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.CITY_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.CITY_UPDATE_SUCCESS) // 성공했을때가 안돼,,, 실패는 됏
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            try{
                city = await City.findAll({
                    where:{
                        id:id
                    }
                })
                if(city.length == 0)
                {
                    resolve({
                        json : utils.successFalse(sc.NO_CONTENT, rm.CITY_EMPTY)
                    });
                    return;
                }
                console.log(city.length);
                city = await City.destroy({
                    where:{
                        id : id
                    }
                });
            }
                
                
            catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.CITY_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.CITY_DELETE_SUCCESS)
            });
        });
    },
};