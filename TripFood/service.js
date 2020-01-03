const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const fn = require('sequelize').fn;
const col = require('sequelize').col;

const {TripFood} = require('../models');

module.exports = {

    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const TF = await TripFood.findAll({
                where: {
                    TripId: TripId
                },
            });
            console.log(TF);

            if(TF.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRIPFOOD_EMPTY)
                });
                return;
            }
            if (!TF) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_READ_SUCCESS, TF)
            });
        });
    },
    create: ({
        array,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            let TF;
            try {
                console.log(array);
                for(var n in array){
                    TF = await TripFood.create({
                        grade: array[n].grade,
                        cost: array[n].cost, // 미디엄에서 가져오자.
                        count: array[n].count,
                        TripId: TripId
                    });
                }
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_CREATE_SUCCESS)
            });
        });
    },
    update: ({
        grade,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const count = await TripFood.findOne({
                where: {
                    TripId: TripId,
                    grade: grade,
                },
                attribute : ['count'],
            })
            const TF = await TripFood.update({
                count: count.dataValues.count-1,
            }, {
                where: {
                    TripId: TripId,
                    grade: grade,
                },
            });
            if (!TF) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            let TF;
            try {
                TF = await TripFood.destroy({
                    where:{
                        id : id
                    }
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRIPFOOD_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRIPFOOD_DELETE_SUCCESS)
            });
        });
    },
};