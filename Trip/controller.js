const TripService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const moment = require('moment');
module.exports = {
    read: async (req, res) => {
        const {
            id // Trip Id 하나만 가져온다.
        } = req.body;
        if (!id) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TripService.read({
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
    scheduleRead: async (req, res) => {
        TripService.scheduleRead()
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            })
    },
    trippingRead: async (req, res) => {
        TripService.trippingRead()
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            })
    },
    trippedRead: async (req, res) => {
        TripService.trippedRead()
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
            title,
            start,
            end,
            activityBudget,
            hotelBudget,
            foodBudget,
            shoppingBudget,
            snackBudget,
            transportBudget,
            UserId,
        } = req.body;
        const {
            CityId,
        } = req.params;
        console.log(CityId, title, start, end);
        if (!CityId || !title || !start || !end || !UserId) {
            const missParameters = Object.entries({
                    title,
                    start,
                    end,
                    CityId,
                    UserId
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        momentStart = moment(start);
        momentEnd = moment(end);
        totalDay = momentEnd.diff(momentStart, 'days'),
        TripService.create({
                title,
                momentStart,
                momentEnd,
                activityBudget,
                hotelBudget,
                foodBudget,
                shoppingBudget,
                snackBudget,
                transportBudget,
                totalDay,
                CityId,
                UserId
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
    trippingUpdate: async (req, res) => {
        const {
            id,
            flag
        } = req.body;
        if (!id || !flag) {
            const missParameters = Object.entries({
                id,
                flag
            })
            .filter(it => it[1] == undefined).map(it => it[0]).join(',');
        res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
        return;
    }
        TripService.trippingUpdate({
                id,
                flag
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
    trippedUpdate: async (req, res) => {
        const {
            id,
            flag
        } = req.body;
        if (!id || !flag) {
            const missParameters = Object.entries({
                id,
                flag
            })
            .filter(it => it[1] == undefined).map(it => it[0]).join(',');
        res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
        return;
    }
        TripService.trippedUpdate({
                id,
                flag
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
        TripService.delete({
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
