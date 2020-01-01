const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const moment = require('moment');

const {Trip} = require('../models');

module.exports = {

    read: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findOne({
                where: {
                    id: id,
                }
            });
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_READ_SUCCESS, trip)
            });
        });
    },
    // 여행 후보 read
    scheduleRead: () => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    status: 1,
                }
            });
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_SCHEDULE_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_SCHEDULE_READ_SUCCESS, trip)
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
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_TRIPPING_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_TRIPPING_READ_SUCCESS, trip)
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
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIP_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_TRIPPED_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_TRIPPED_READ_SUCCESS, trip)
            });
        });
    },
    create: ({
        title,
        start,
        end,
        activityBudget,
        hotelBudget,
        foodBudget,
        shoppingBudget,
        snackBudget,
        transportBudget,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            console.log(typeof moment(start));
            try {
                trip = await Trip.create({
                    title : title,
                    start : moment(start),
                    end : moment(end),
                    destination: CityId,
                    activityBudget: activityBudget,
                    hotelBudget: hotelBudget,
                    foodBudget: foodBudget,
                    shoppingBudget: shoppingBudget,
                    snackBudget: snackBudget,
                    transportBudget: transportBudget,
                    totalDay: moment(end).diff(moment(start), 'days'),
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_CREATE_SUCCESS, trip)
            });
        });
    },
    trippingUpdate: ({
        id,
        flag
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    status: 2
                }, {
                    where: {
                        id: id,
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPPING_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPPING_UPDATE_SUCCESS, trip)
            });
        });
    },
    trippedUpdate: ({
        id,
        flag
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
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPPED_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPPED_UPDATE_SUCCESS, trip)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.destroy({
                    where:{
                        id : id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_DELETE_SUCCESS)
            });
        });
    }
};