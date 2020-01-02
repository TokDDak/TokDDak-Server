const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {TripActivity} = require('../models');

module.exports = {

    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TA = await TripActivity.findAll({
                where: {
                    TripId: TripId
                }
            });
            if(TA.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIPACTIVITY_EMPTY)
                });
                return;
            }
            if (!TA) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPACTIVITY_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPACTIVITY_READ_SUCCESS, TA)
            });
        });
    },
    create: ({
        array,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            let TA;
            try {
                for(var n in array){
                    TA = await TripActivity.create({
                        name: array[n].name,
                        cost: array[n].cost, // 미디엄에서 가져오자.
                        TripId: TripId
                    });
                }
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPACTIVITY_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPACTIVITY_CREATE_SUCCESS)
            });
        });
    },
};