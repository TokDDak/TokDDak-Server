const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

const {Snack} = require('../models');

module.exports = {
    readAll: () => {
        return new Promise(async (resolve, reject) => {
            const snack = await Snack.findAll({});
            if (snack.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_EMPTY)
                });
                return;
            }
            if (!snack) {
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
            const snack = await Snack.findOne({
                where: {
                    id: id,
                }
            });
            if (snack.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.BLOG_READ_BLOGIDX_FAIL)
                });
                return;
            }
            if (!snack) {
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
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
 //           let snack;
            try {
                snack = await Snack.create({
                    name: name,
                    cost: cost
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
        snackIdx,
        cost
    }) => {
        return new Promise(async (resolve, reject) => {
            const snack = await Snack.update({
                cost : cost
            }, {
                where: {
                    snackIdx: snackIdx
                },
            });
            if (!snack) {
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
        snackIdx
    }) => {
        return new Promise(async (resolve, reject) => {
            let snack;
            try {
                snack = await Snack.destroy({
                    where: {
                        snackIdx: snackIdx
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