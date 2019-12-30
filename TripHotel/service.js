const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {TripHotel} = require('../models');
const md = require('../module/median');
module.exports = {

    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TH = await TripHotel.findAll({
                where: {
                    TripId: TripId
                }
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
                for(let [key, value] of Object.entries(array)) {
                    for(let [key2, value2] of Object.entries(value)){
                        console.log(key2, value2);
                    TH = await TripHotel.create({
                        grade: key2,
                        cost: value2, // 미디엄에서 가져오자.
                        TripId: TripId
                    });
                }
            };
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, "rm.TRIPHOTEL_CREATE_FAIL")
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, "rm.TRIPHOTEL_CREATE_SUCCESS", TH)
            });
        });
    },
    update: ({
        grade,
        cost,
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const TH = await TripHotel.update({
                grade,
                cost
            }, {
                where: {
                    id : id
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