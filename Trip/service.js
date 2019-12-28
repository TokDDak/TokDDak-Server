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
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    hotelUpdate: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    foodUpdate: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    activityUpdate: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    transportUpdate: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    shoppingUpdate: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    snackUpdate: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    allDelete: ({id}) => {
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
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_DELETE_SUCCESS)
            });
        });
    },
    hotelDelete: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    foodDelete: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    activityDelete: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    transportDelete: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    shoppingDelete: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
    snackDelete: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let trip;
            try {
                trip = await Trip.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, trip)
            });
        });
    },
};