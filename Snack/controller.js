const SnackService = require('./service');

const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

module.exports = {
    read: async (req, res) => {
        const {
            CityId
        } = req.params;
        if (!CityId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        SnackService.read({
                CityId
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
            name,
            cost
        } = req.body;
        const {
            CityId
        } = req.params;
        if (!name || !cost) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        SnackService.create({
                name,
                cost,
                CityId
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                res.send(err);
            })
    },
    update: async (req, res) => {
        const {
            id,
            cost
        } = req.body;
        const {
            CityId
        } = req.params;
        if (!id || !cost) {
            const missParameters = Object.entries({
                    id,
                    cost,
                    CityId
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        SnackService.update({
                id,
                cost,
                CityId
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
            id
        } = req.body;
        if (!id) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        SnackService.delete({
                blogId
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