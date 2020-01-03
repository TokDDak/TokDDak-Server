const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const fn = require('sequelize').fn;
const col = require('sequelize').col;

const {TripHotel} = require('../models');
module.exports = {

    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TH = await TripHotel.findAll({
                where: {
                    TripId: TripId
                },

            });
            if(TH.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIPHOTEL_EMPTY)
                });
                return;
            }
            if (!TH) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPHOTEL_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPHOTEL_READ_SUCCESS, TH)
            });
        });
    },
    create: ({
        array,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            let TH;
            try {
                for(var n in array){
                    TH = await TripHotel.create({
                        grade: array[n].grade,
                        cost: array[n].cost, // 미디엄에서 가져오자.
                        count: array[n].count,
                        TripId: TripId
                    });
                }    
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPHOTEL_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPHOTEL_CREATE_SUCCESS)
            });
        });
    },
    update: ({
        grade,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const count = await TripHotel.findOne({
                where: {
                    TripId: TripId,
                    grade: grade,
                },
                attribute : ['count'],
            })
            const TH = await TripHotel.update({
                count: count.dataValues.count-1,
            }, {
                where: {
                    TripId: TripId,
                    grade: grade,
                },
            });
            if (!TH) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPHOTEL_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPHOTEL_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            let TH;
            try {
                TH = await TRIPHOTEL.destroy({
                    where:{
                        id : id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPHOTEL_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPHOTEL_DELETE_SUCCESS)
            });
        });
    },
};