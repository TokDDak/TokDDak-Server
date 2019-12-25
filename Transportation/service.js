const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Transportation} = require('../models');

module.exports = {
    readAll: () => {
        return new Promise(async (resolve, reject) => {
            const transportation = await Transportation.findAll({});
            if(transportation.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_EMPTY)
                });
                return;
            }
            if (!transportation) {
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
            const transportation = await Transportation.findOne({
                where: {
                    id : id
                }
            });
            if(transportation.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!transportation) {
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
        name,
        cost,
        content
    }) => {
        return new Promise(async (resolve, reject) => {
            let transportation;
            try {
                transportation = await Transportation.create({
                    name : name,
                    cost : cost,
                    content : content
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
    update: ({
        transportationIdx,
        cost,
        content
    }) => {
        return new Promise(async (resolve, reject) => {
            const transportation = await Transportation.update({
                cost : cost,
                content : content
            }, {
                where: {
                    transportationIdx : transportationIdx
                },
            });
            if (!transportation) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({transportationIdx}) => {
        return new Promise(async (resolve, reject) => {
            let transportation;
            try {
                transportation = await Transportation.destroy({
                    where:{
                        transportationIdx : transportationIdx
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