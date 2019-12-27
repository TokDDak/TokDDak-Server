const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Transportation} = require('../models');

module.exports = {

    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const transportation = await Transportation.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(transportation.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!transportation) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, transportation)
            });
        });
    },
    create: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let transportation;
            try {
                transportation = await Transportation.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, transportation)
            });
        });
    },
    update: ({
        id,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const transportation = await Transportation.update({
                cost : cost,
                content : content
            }, {
                where: {
                    id : id
                },
            });
            if (!transportation) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SPORT_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            let transportation;
            try {
                transportation = await Transportation.destroy({
                    where:{
                        id : id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_DELETE_SUCCESS)
            });
        });
    },
};