const CountryService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

module.exports = {
    readAll: async (req, res) => {
        CountryService.readAll()
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            });
    },
    readOne: async (req, res) => {
        const {
            id
        } = req.body;
        if (!id) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        CountryService.readOne({
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
    create: async (req, res) => {
        const {
            name
        } = req.body;
        if (!name) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        CountryService.create({
                name
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                res.send(err);
            })
    },
   // country update 없어도되지? *
    delete: async (req, res) => {
        const {
            id
        } = req.body;
        if (!id) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        CountryService.delete({
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
