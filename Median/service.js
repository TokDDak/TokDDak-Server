const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const md = require('../module/median'); // median 모듈, 파라미터 : cityId와 grade
module.exports = {
    hotelRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const median = await md.hotelRead({CityId});
            if (!median) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.MEDIAN_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.MEDIAN_READ_SUCCESS, median)
            });
        });
    },
    hotelReadiOS: ({
        CityId,
        subCategory
    }) => {
        return new Promise(async (resolve, reject) => {
            const median = await md.hotelReadiOS({CityId, subCategory});
            if (!median) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.MEDIAN_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.MEDIAN_READ_SUCCESS, median)
            });
        });
    },
    foodRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const median = await md.foodRead({CityId});
            if (!median) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.MEDIAN_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.MEDIAN_READ_SUCCESS, median)
            });
        });
    },
    snackRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const median = await md.hotelRead({CityId});
            if (!median) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.MEDIAN_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.MEDIAN_READ_SUCCESS, median)
            });
        });
    },
};