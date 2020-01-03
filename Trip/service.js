const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const moment = require('moment');

const {
    Trip,
    City
} = require('../models');

module.exports = {

    read: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findOne({
                where: {
                    id: id,
                },
                attributes: ['id', 'start', 'end', 'title', 'city', 'country', 'activityBudget', 'hotelBudget', 'foodBudget', 'shoppingBudget', 'snackBudget', 'transportBudget']
            });
            if (!trip) {
                resolve({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_READ_FAIL)
                });
                return;
            }
            if (trip.length == 0) {
                resolve({
                    code: sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_READ_SUCCESS, trip)
            });
        });
    },
    // 여행 후보 read
    preTripRead: () => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    status: 1,
                }
            });
            if (trip.length == 0) {
                resolve({
                    code: sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_LIST_READ_FAIL)
                });
                return;
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_LIST_READ_SUCCESS, trip)
            });
        });
    },
    trippingRead: () => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    status: 2,
                }
            });
            if (trip.length == 0) {
                resolve({
                    code: sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPPING_READ_FAIL)
                });
                return;
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIPPING_READ_SUCCESS, trip)
            });
        });
    },
    trippedRead: () => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    status: 3,
                }
            });
            if (trip.length == 0) {
                resolve({
                    code: sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPPING_READ_FAIL)
                });
                return;
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIPPED_READ_SUCCESS, trip)
            });
        });
    },
    create: ({
        title,
        momentStart,
        momentEnd,
        activityBudget,
        hotelBudget,
        foodBudget,
        shoppingBudget,
        snackBudget,
        transportBudget,
        totalDay,
        CityId,
        UserId
    }) => {
        return new Promise(async (resolve, reject) => {
            const tripChk = await Trip.findAll({
                where: {
                    title: title,
                    UserId: UserId
                }
            });
            if (tripChk.length != 0) {
                resolve({
                    code: sc.BAD_REQUEST,
                    json: utils.successFalse(sc.BAD_REQUEST, rm.ALREADY_TRIP)
                });
                return;
            }
            const city = await City.findOne({
                where: {
                    id: CityId,
                },
                attributes: ['name','country']
            })
            let trip;
            try {
                trip = await Trip.create({
                    title: title,
                    start: momentStart,
                    end: momentEnd,
                    city : city.dataValues.name,
                    country: city.dataValues.country,
                    activityBudget: activityBudget,
                    hotelBudget: hotelBudget,
                    foodBudget: foodBudget,
                    shoppingBudget: shoppingBudget,
                    snackBudget: snackBudget,
                    transportBudget: transportBudget,
                    totalDay: totalDay,
                    UserId: UserId
                });

            } catch (error) {
                reject({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_CREATE_FAIL)
                });
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_CREATE_SUCCESS, trip)
            });
        });
    },
    trippingUpdate: ({
        id,
    }) => {
        return new Promise(async (resolve, reject) => {
            const tripRead = await Trip.findAll({});
            console.log(tripRead);
            if(tripRead.length == 0){
                resolve({
                    code: sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            let trip = await Trip.findAll({
                where: {
                    status: 2,
                }
            });
            if(trip.length != 0){
                resolve({
                    code: sc.BAD_REQUEST,
                    json: utils.successFalse(sc.BAD_REQUEST, rm.ALREADY_TRIPPING)
                });
                return;
            }

            try {
                await Trip.update({
                    status: 2
                }, {
                    where: {
                        id: id,
                    }
                });

            } catch (error) {
                reject({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPPING_UPDATE_FAIL)
                });
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIPPING_UPDATE_SUCCESS)
            });
        });
    },
    trippedUpdate: ({
        id,
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    status: 3
                }, {
                    where: {
                        id: id,
                    }
                });

            } catch (error) {
                reject({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPPED_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPPED_UPDATE_SUCCESS, trip)
            });
        });
    },
    delete: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                trip = await Trip.destroy({
                    where: {
                        id: id
                    }
                });

            } catch (error) {
                reject({
                    code: sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_DELETE_FAIL)
                });
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_DELETE_SUCCESS)
            });
        });
    }
};