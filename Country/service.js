const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Country} = require('../models');

module.exports = {
    readAll: () => {
        return new Promise(async (resolve, reject) => {
            const country = await Country.findAll({});
            if(country.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_EMPTY)
                });
                return;
            }
            if (!country) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_ALL_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_ALL_SUCCESS, transportation)
            });
        });
    },
    readOne: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const country = await Country.findOne({
                where: {
                    id : id,
                }
            });
            if(country.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!country) {
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
        name
    }) => {
        return new Promise(async (resolve, reject) => {
            let country;
            try {
                country = await Country.create({
                    name : name
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_CREATE_SUCCESS, blog)
            });
        });
    },
    delete: ({countryIdx}) => {
        return new Promise(async (resolve, reject) => {
            let country;
            try {
                country = await Country.destroy({
                    where:{
                        countryIdx : countryIdx
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