const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const fn = require('sequelize').fn;
const col = require('sequelize').col;

const {TripSnack} = require('../models');

module.exports = {
    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TS = await TripSnack.findAll({
                where: {
                    TripId: TripId
                },
            });
            console.log(TS.dataValues);
            if(TS.length == 0) {
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
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const count = await TripSnack.findOne({
                where: {
                    TripId: TripId,
                    grade: grade,
                },
                attribute : ['count'],
            })
            const TS = await TripSnack.update({
                count: count.dataValues.count-1,
            }, {
                where: {
                    TripId: TripId,
                    grade: grade,
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