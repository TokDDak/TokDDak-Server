const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Shopping} = require('../models');

module.exports = {
     readimg: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const shopping = await Shopping.findAll({
                where: {
                    CityId : CityId
                },
                attributes: ['img']
            });
            if(shopping.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.SHOPPING_EMPTY)
                });
                return;
            }
            if (!shopping) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SHOPPING_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SHOPPING_READ_BLOGIDX_SUCCESS, shopping)
            });
        });
    },
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
                    json: utils.successFalse(sc.NO_CONTENT, rm.SHOPPING_EMPTY)
                });
                return;
            }
            if (!shopping) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SHOPPING_READ_CITYID_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SHOPPING_READ_CITYID_SUCCESS, shopping)
            });
        });
    },
    create: ({
        name,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let shopping;
            try {
                shopping = await Shopping.create({
                        name : name,
                        cost : cost,
                        CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SHOPPING_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SHOPPING_CREATE_SUCCESS, shopping)
            });
        });
    },
    update: ({
        id,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const shopping = await Shopping.update({
                cost : cost,
                CityId : CityId
            }, {
                where : { id : id },
            });
            if (!shopping) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SHOPPING_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SHOPPING_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            try{
                shopping = await Shopping.findAll({
                    where:{
                        id:id
                    }
                })
                if(shopping.length == 0)
                {
                    resolve({
                        json : utils.successFalse(sc.NO_CONTENT, rm.SHOPPING_EMPTY)
                    });
                    return;
                }
                console.log(shopping.length);
                shopping = await Shopping.destroy({
                    where:{
                        id : id
                    }
                });
            }
            catch(error)
            {
                reject({
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SHOPPING_DELETE_FAIL)
                });
            }   
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.CITY_DELETE_SUCCESS)
            });
        });
    },
};