const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Snack} = require('../models');

module.exports = {
   
    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const snack = await Snack.findAll({
                where: {
                    CityId: CityId,
                }
            });
            if (snack.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.SNACK_EMPTY)
                });
                return;
            }
            if (!snack) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SNACK_READ_CITYID_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SNACK_READ_CITYID_SUCCESS, snack)
            });
        });
    },
    create: ({
        name,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let snack;
            try {
                snack = await Snack.create({
                    name: name,
                    cost: cost,
                    CityId : CityId
                });

            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SNACK_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SNACK_CREATE_SUCCESS, snack)
            });
        });
    },
    update: ({
        id,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const snack = await Snack.update({
                cost : cost,
                CityId : CityId
            }, {
                where: {
                    id: id
                },
            });
            if (!snack) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SNACK_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SNACK_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            let snack;
            try {
                snack = await Snack.destroy({
                    where: {
                        id: id
                    }
                });

            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SNACK_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SNACK_DELETE_SUCCESS)
            });
        });
    },
};