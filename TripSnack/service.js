const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {TripSnack} = require('../models');

module.exports = {

    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TS = await TripSnack.findAll({
                where: {
                    TripId: TripId
                }
            });
            if(TH.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIPSNACK_EMPTY)
                });
                return;
            }
            if (!TS) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPSNACK_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPSNACK_READ_SUCCESS, TS)
            });
        });
    },
    create: ({
        array,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            let TS;
            try {
                for(var n in array){
                    TS = await TripSnack.create({
                        grade: array[n].grade,
                        cost: array[n].cost, // 미디엄에서 가져오자.
                        count: array[n].count,
                        TripId: TripId
                    });
                }
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPSNACK_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPSNACK_CREATE_SUCCESS)
            });
        });
    },
    update: ({
        grade,
        cost,
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const TS = await TripSnack.update({
                grade,
                cost
            }, {
                where: {
                    id : id
                },
            });
            if (!TS) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPSNACK_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPSNACK_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            try {
                await TripSnack.destroy({
                    where:{
                        id : id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPSNACK_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPSNACK_DELETE_SUCCESS)
            });
        });
    },
};