const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Activity} = require('../models');

module.exports = {
    readAll: () => {
        return new Promise(async (resolve, reject) => {
            const activity = await Activity.findAll({});
            if (activity.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_EMPTY)
                });
                return;
            }
            if (!activity) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.BLOG_READ_ALL_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_ALL_SUCCESS, blog)
            });
        });
    },
    readOne: ({
        id
    }) => {
        return new Promise(async (resolve, reject) => {
            const activity = await Activity.findOne({
                where: {
                    id: id,
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
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_READ_BLOGIDX_SUCCESS, blog)
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
                json: utils.successTrue(sc.SUCCESS, rm.BLOG_CREATE_SUCCESS, blog)
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