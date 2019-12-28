const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Trip} = require('../models');

module.exports = {

    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, trip)
            });
        });
    },
    scheduleRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, trip)
            });
        });
    },
    trippingRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, trip)
            });
        });
    },
    trippedRead: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const trip = await Trip.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(trip.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!trip) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, trip)
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