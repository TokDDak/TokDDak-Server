const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {
    Activity
} = require('../models');
// 이름, 가격, 설명, url 
module.exports = {
    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const activity = await Activity.findAll({
                where: {
                    CityId: CityId,
                }
            });
            if (activity.length == 0) {
                resolve({
                    code: sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.ACTIVITY_EMPTY)
                });
                return;
            }
            if (!activity) {
                resolve({
                    code : sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.ACTIVITY_READ_CITYID_FAIL)
                });
                return;
            }
            resolve({
                code: sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.ACTIVITY_READ_CITYID_SUCCESS, activity)
            });
        });
    },
    create: ({
        name,
        cost,
        content,
        url_mrt,
        url_kl,
        CityId,
        img
    }) => {
        return new Promise(async (resolve, reject) => {
            let activity;
            console.log({
                name,
                cost,
                content,
                url_mrt,
                url_kl,
                CityId,
                img
            });
            try {
                activity = await Activity.create({
                    name: name,
                    cost: cost,
                    content: content,
                    url_mrt,
                    url_kl,
                    CityId: CityId,
                    img : img
                });
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.ACTIVITY_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.ACTIVITY_CREATE_SUCCESS, activity)
            });
        });
    },
    update: ({ //@@ 
        id,
        cost,
        content,
        url_mrt,
        url_kl,
        CityId,
        img
    }) => {
        return new Promise(async (resolve, reject) => {
            const activity = await Activity.update({
                cost: cost,
                content: content,
                url_mrt:url_mrt,
                url_kl :url_kl,
                CityId: CityId,
                img : img
            }, {
                where: {
                    id : id
                },
            });
            if (!activity) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.ACTIVITY_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.ACTIVITY_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            try{
                activity = await Activity.findAll({
                    where:{
                        id:id
                    }
                })
                if(activity.length == 0)
                {
                    resolve({
                        json : utils.successFalse(sc.NO_CONTENT, rm.ACTIVITY_EMPTY)
                    });
                    return;
                }
                console.log(activity.length);
                activity = await Activity.destroy({
                    where:{
                        id : id
                    }
                });
            }
            catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.ACTIVITY_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.ACTIVITY_DELETE_SUCCESS)
            });
        });
    },
};