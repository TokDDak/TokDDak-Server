const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Hotel} = require('../models');

module.exports = {
    
    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const hotel = await Hotel.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(hotel.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.HOTEL_EMPTY)
                });
                return;
            }
            if (!hotel) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.HOTEL_READ_CITYID_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.HOTEL_READ_CITYID_SUCCESS, hotel)
            });
        });
    },
    create: ({
        name,
        grade,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let hotel;
            try {
                hotel = await Hotel.create({
                    name : name,
                    grade : grade,
                    cost : cost,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.HOTEL_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.HOTEL_CREATE_SUCCESS, hotel)
            });
        });
    },
    update: ({
        id,
        grade,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const hotel = await Hotel.update({
                grade : grade,
                cost : cost,
                CityId : CityId
            }, {
                where: {
                    id : id
                },
            });
            if (!hotel) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.HOTEL_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.HOTEL_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            let hotel;
            try {
                hotel = await Hotel.destroy({
                    where:{
                        id : id 
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.HOTEL_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.HOTEL_DELETE_SUCCESS)
            });
        });
    },
};