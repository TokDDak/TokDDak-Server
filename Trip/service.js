const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

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
    initCreate: ({
        title,
        start,
        end,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    title : title,
                    start : start,
                    end : end,
                    CityId : CityId
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
    hotelUpdate: ({
        TripId,
        totalCost
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    hotelBudget: totalCost
                }, {
                    where: {
                    id: TripId,
                    },
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_HOTELBUDGET_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_HOTELBUDGET_UPDATE_SUCCESS, trip)
            });
        });
    },
    foodUpdate: ({
        TripId,
        totalCost
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    foodBudget: totalCost
                }, {
                    where: {
                        id: TripId,
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_FOODBUDGET_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_FOODBUDGET_UPDATE_SUCCESS, trip)
            });
        });
    },
    activityUpdate: ({
        TripId,
        totalCost
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    activityBudget: totalCost
                }, {
                    where: {
                        id: TripId,
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_ACTIVITYBUDGET_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_ACTIVITYBUDGET_UPDATE_SUCCESS, trip)
            });
        });
    },
    transportUpdate: ({
        TripId,
        totalCost
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    tansportBudget: totalCost
                }, {
                    where: {
                        id: TripId,
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_TRANSPORTBUDGET_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_TRANSPORTBUDGET_UPDATE_SUCCESS, trip)
            });
        });
    },
    shoppingUpdate: ({
        TripId,
        totalCost
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    shoppingBudget: totalCost
                }, {
                    where: {
                        id: TripId,
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_SHOPPINGBUDGET_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_SHOPPINGBUDGET_UPDATE_SUCCESS, trip)
            });
        });
    },
    snackUpdate: ({
        TripId,
        totalCost
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.update({
                    snackBudget: totalCost
                }, {
                    where: {
                        id: TripId,
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIP_SNACKBUDGET_UPDATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIP_SNACKBUDGET_UPDATE_SUCCESS, trip)
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