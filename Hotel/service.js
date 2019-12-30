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
        category,
        subCategory,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let hotel;
            try {
                hotel = await Hotel.create({
                    name : name,
                    category : category,
                    subCategory : subCategory,
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
        category,
        subCategory,
        cost,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const hotel = await Hotel.update({
                category : category,
                subCategory : subCategory,
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
    delete: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            try{
                hotel = await Hotel.findAll({
                    where:{
                        id:id
                    }
                })
                if(hote.length == 0)
                {
                    resolve({
                        json : utils.successFalse(sc.NO_CONTENT, rm.HOTEL_EMPTY)
                    });
                    return;
                }
                console.log(hotel.length);
                hotel = await Hotel.destroy({
                    where:{
                        id : id
                    }
                });
            } 
            catch (error) {
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