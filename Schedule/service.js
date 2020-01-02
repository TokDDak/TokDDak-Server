const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {
    Schedule
} = require('../models');

module.exports = {
    create: ({
        day, // 받은 파라미터
        cost,
        category,
        content
    }) => {
        return new Promise(async (resolve, reject) => {
            let schedule;
            try {
                schedule = await Schedule.create({
                    day: day, // 좌측 = 디비필드, 우측 = 위의 파라미터.
                    cost: cost, // 좌측의 디비에 파라미터 값을 넣는다.
                    category: category,
                    content: content
                });
            } catch (error) {
                reject({ // 실패시 json 반환.
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SCHEDULE_CREATE_FAIL)
                });
            }
            resolve({ // 성공시 json 반환.
                json: utils.successTrue(sc.SUCCESS, rm.SCHEDULE_CREATE_SUCCESS, schedule)
            });
        });
    },
    read: ({
        TripId // TripId를 받아야한다!
    }) => {
        return new Promise(async (resolve, reject) => {
            const schedule = await Schedule.findAll({
                where: {
                    TripId: TripId,
                }
            });
            if (schedule.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.SCHEDULE_EMPTY)
                });
                return;
            }
            if (!schedule) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SCHEDULE_READ_TRIPID_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SCHEDULE_READ_TRIPID_SUCCESS, schedule)
            });
        });
    },
    // update: ({
    //     id,
    //     cost,
    //     CityId
    // }) => {
    //     return new Promise(async (resolve, reject) => {
    //         const shopping = await Shopping.update({
    //             cost: cost,
    //             CityId: CityId
    //         }, {
    //             where: {
    //                 id: id
    //             },
    //         });
    //         if (!shopping) {
    //             resolve({
    //                 json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SHOPPING_UPDATE_FAIL)
    //             });
    //             return;
    //         }
    //         resolve({
    //             json: utils.successTrue(sc.SUCCESS, rm.SHOPPING_UPDATE_SUCCESS)
    //         });
    //     });
    // },
    delete: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                schedule = await Schedule.findAll({
                    where: {
                        id: id
                    }
                })
                if (schedule.length == 0) {
                    resolve({
                        json: utils.successFalse(sc.NO_CONTENT, rm.SCHEDULE_EMPTY)
                    });
                    return;
                }
                console.log(schedule.length);
                schedule = await Schedule.destroy({
                    where: {
                        id: id
                    }
                });
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.SCHEDULE_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.SCHEDULE_DELETE_SUCCESS)
            });
        });
    },
};