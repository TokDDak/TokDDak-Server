const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Shopping} = require('../models');

module.exports = {
    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const shopping = await Shopping.findAll({
                where: {
                    CityId : CityId,
                }
            });
            if(shopping.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!shopping) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_BLOGIDX_SUCCESS, blog)
            });
        });
    },
    create: ({
        name,
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
            let shopping;
            try {
                shopping = await Shopping.create({
                        name : name,
                        cost : cost
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
        shoppingIdx,
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
            const shopping = await Shopping.update({
                cost : cost
            }, {
                where : { shoppingIdx : shoppingIdx },
            });
            if (!shopping) {
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
    delete: ({shoppingIdx}) => {
        return new Promise(async (resolve, reject) => {
            let shopping;
            try {
                shopping = await Shopping.destroy({
                    where:{
                        shoppingIdx: shoppingIdx
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