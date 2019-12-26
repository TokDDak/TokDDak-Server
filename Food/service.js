const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Food} = require('../models');

module.exports = {

    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const food = await Food.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(food.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!food) {
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
            let food;
            try {
                food = await Food.create({
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
        foodIdx,
        grade,
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
            const food = await Food.update({
                grade : grade,
                cost : cost
            }, {
                where: {
                    foodIdx : foodIdx
                },
            });
            if (!food) {
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
    delete: ({foodIdx}) => {
        return new Promise(async (resolve, reject) => {
            let food;
            try {
                food = await Food.destroy({
                    where:{
                        foodIdx : foodIdx
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