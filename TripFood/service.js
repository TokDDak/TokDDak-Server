const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {TripFood} = require('../models');

module.exports = {

    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TF = await TripFood.findAll({
                where: {
                    TripId: TripId
                }
            });
            if(TF.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIPFOOD_EMPTY)
                });
                return;
            }
            if (!TF) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_READ_SUCCESS, TF)
            });
        });
    },
    create: ({
        array,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            let TF;
            try {
                for(let [key, value] of Object.entries(array)) {
                    for(let [key2, value2] of Object.entries(value)){
                        console.log(key2, value2);
                    TF = await TripFood.create({
                        grade: key2,
                        cost: value2, // 미디엄에서 가져오자.
                        TripId: TripId
                    });
                }
            };
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, "rm.TRIPFOOD_CREATE_FAIL")
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, "rm.TRIPFOOD_CREATE_SUCCESS", TF)
            });
        });
    },
    update: ({
        grade,
        cost,
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const TF = await TripFood.update({
                grade,
                cost
            }, {
                where: {
                    id : id
                },
            });
            if (!TF) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            let TF;
            try {
                TF = await TripFood.destroy({
                    where:{
                        id : id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_DELETE_SUCCESS)
            });
        });
    },
};