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
                    CityId: CityId,
                }
            });
            if (food.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.FOOD_EMPTY)
                });
                return;
            }
            if (!food) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.FOOD_READ_CITYID_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.FOOD_READ_CITYID_SUCCESS, food)
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
            let food;
            try {
                food = await Food.create({
                    name : name,
                    grade : grade,
                    cost : cost,
                    CityId: CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.FOOD_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.FOOD_CREATE_SUCCESS, food)
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
            const food = await Food.update({
                grade : grade,
                cost : cost,
                CityId : CityId
            }, {
                where: {
                    id : id
                },
            });
            if (!food) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.FOOD_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.FOOD_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            try{
                food = await Food.findAll({
                    where:{
                        id:id
                    }
                })
                if(food.length == 0)
                {
                    resolve({
                        json : utils.successFalse(sc.NO_CONTENT, rm.FOOD_EMPTY)
                    });
                    return;
                }
                console.log(food.length);
                food = await food.destroy({
                    where:{
                        id : id
                    }
                });
            } 
            catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.FOOD_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.FOOD_DELETE_SUCCESS)
            });
        });
    },
};