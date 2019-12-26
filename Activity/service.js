const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Activity} = require('../models');
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
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!activity) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_BLOGIDX_SUCCESS, activity)
            });
        });
    },
    create: ({
        name,
        cost,
        content,
        location
    }) => {
        return new Promise(async (resolve, reject) => {
            let activity;
            try {
                activity = await activity.create({
                    name : name,
                    cost : cost,
                    content : content,
                    location : location
                });

            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_CREATE_SUCCESS, activity)
            });
        });
    },
    update: ({
        activityIdx,
        cost,
        content,
        location
    }) => {
        return new Promise(async (resolve, reject) => {
            const activity = await Activity.update({
                cost : cost,
                content : content,
                location : location
            }, {
                where: {
                    activityIdx: activityIdx
                },
            });
            if (!activity) {
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
    delete: ({
        activityIdx
    }) => {
        return new Promise(async (resolve, reject) => {
            let activity;
            try {
                activity = await activity.destroy({
                    where: {
                        activityIdx: activityIdx
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