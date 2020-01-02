const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


const {Transport} = require('../models');

module.exports = {
    readimg: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const transport = await Transport.findAll({
                where: {
                    CityId : CityId
                },
                attributes: ['img']
            });
            if(transport.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!transport) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, transport)
            });
        });
    },
    read: ({
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const transport = await Transport.findAll({
                where: {
                    CityId : CityId
                }
            });
            if(transport.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                });
                return;
            }
            if (!transport) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_READ_BLOGIDX_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_READ_BLOGIDX_SUCCESS, transport)
            });
        });
    },
    create: ({
        name,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            let transport;
            try {
                transport = await Transport.create({
                    name : name,
                    cost : cost,
                    content : content,
                    CityId : CityId
                });
                
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_CREATE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_CREATE_SUCCESS, transport)
            });
        });
    },
    update: ({
        id,
        cost,
        content,
        CityId
    }) => {
        return new Promise(async (resolve, reject) => {
            const transport = await Transport.update({
                cost : cost,
                content : content,
                CityId : CityId
            }, {
                where: {
                    id : id
                },
            });
            if (!transport) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_UPDATE_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id}) => {
        return new Promise(async (resolve, reject) => {
            try{
                transport = await Transport.findAll({
                    where:{
                        id:id
                    }
                })
                if(transport.length == 0)
                {
                    resolve({
                        json : utils.successFalse(sc.NO_CONTENT, rm.TRANSPORT_EMPTY)
                    });
                    return;
                }
                console.log(transport.length);
                transport = await Transport.destroy({
                    where:{
                        id : id
                    }
                });
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TRANSPORT_DELETE_FAIL)
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TRANSPORT_DELETE_SUCCESS)
            });
        });
    },
};