const TSService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

module.exports = {
    read: async (req, res) => {
        const {
            TripId // Trip Id를 가지는 모든 정보 가져온다.
        } = req.params;
        if (!TripId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TSService.read({
                TripId
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            })
    },
    create: async (req, res) => {
        const {
            array
        } = req.body;
        const {
            TripId // Trip Id를 가지는 모든 정보 가져온다.
        } = req.params;
        if (!TripId) {
            const missParameters = Object.entries({
                    TripId
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        TSService.create({
            array,
            TripId
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            })
    },
    update: async (req, res) => {
        const {
            id, // Trip Id를 가지는 모든 정보 가져온다.
            grade,
            cost
        } = req.body;
        if (!id || !grade || !cost) {
            const missParameters = Object.entries({
                    grade,
                    cost,
                    id
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        TSService.update({
            id, 
            grade,
            cost
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            })
    },
    delete: async (req, res) => {
        const {
            id // Trip Id를 가지는 모든 정보 가져온다.
        } = req.body;
        if (!id) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TSService.delete({
                id
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            })
    },
}
