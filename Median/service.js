const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Median} = require('../models');
const md = require('../module/median'); // median 모듈, 파라미터 : cityId와 grade
module.exports = {
    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "최고급 호텔";
            const median = await md.hotelRead({CityId, grade});
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
    hotelRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "최고급 호텔";
            const median = await md.hotelRead({CityId, grade});
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
            const grade = "최고급 호텔";
            const median = await md.hotelRead({CityId, grade});
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
            const grade = "최고급 호텔";
            const median = await md.hotelRead({CityId, grade});
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
    bestHotelRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const median = await Shopping.findAll({
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
    bestHotelMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "최고급 호텔";
            const median = await md.hotelRead({CityId, grade});
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
    highHotelRead: ({
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
    highHotelMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "고급 호텔";
            const median = await md.hotelRead({CityId, grade});
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
    normalHotelRead: ({
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
    normalHotelMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "일반 호텔";
            const median = await md.hotelRead({CityId, grade});
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
    apartRead: ({
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
    apartMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "아파트";
            const median = await md.hotelRead({CityId, grade});
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
    hostelRead: ({
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
    hostelMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "호스텔";
            const median = await md.hotelRead({CityId, grade});
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
    highFoodRead: ({
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
    highFoodMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "고급 음식";
            const median = await md.foodRead({CityId, grade});
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
    normalFoodRead: ({
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
    normalFoodMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "일반 음식";
            const median = await md.foodRead({CityId, grade});
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
    cheapFoodRead: ({
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
    cheapFoodMedian: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const grade = "싼 음식";
            const median = await md.foodRead({CityId, grade});
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