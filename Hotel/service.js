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
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!hotel) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_BLOGIDX_SUCCESS, transportation)
            });
        });
    },
    create: ({
        name,
        grade,
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
            let hotel;
            try {
                hotel = await Hotel.create({
                    name : name,
                    grade : grade,
                    cost : cost
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_CREATE_SUCCESS, blog)
            });
        });
    },
    update: ({
        hotelIdx,
        grade,
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
            const hotel = await Hotel.update({
                grade : grade,
                cost : cost
            }, {
                where: {
                    hotelIdx : hotelIdx
                },
            });
            if (!hotel) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({hotelIdx}) => {
        return new Promise(async (resolve, reject) => {
            let hotel;
            try {
                hotel = await Hotel.destroy({
                    where:{
                        hotelIdx : hotelIdx
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_DELETE_SUCCESS)
            });
        });
    },
};