const TripService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

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
    initCreate: async (req, res) => {
        const {
            title,
            start,
            end
        } = req.body;
        const {
            CityId
        } = req.params;
        if (!CityId || !title || !start || !end) {
            const missParameters = Object.entries({
                    title,
                    start,
                    end,
                    CityId
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        TripService.initCreate({
                title,
                start,
                end,
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
    hotelUpdate: async (req, res) => {
        const {
            totalCost // Trip - hotelBudget에 저장
        } = req.body;
        const {
            TripId
        } = req.params;
        if (!TripId || !totalCost) {
            const missParameters = Object.entries({
                totalCost,
                TripId
            })
            .filter(it => it[1] == undefined).map(it => it[0]).join(',');
        res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
        return;
        }
        TripService.hotelUpdate({
                TripId,
                totalCost
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
    foodUpdate: async (req, res) => {
        const {
            totalCost // Trip - foodBudget에 저장
        } = req.body;
        const {
            TripId
        } = req.params;
        if (!CityId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TripService.foodUpdate({
                TripId,
                totalCost
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
    activityUpdate: async (req, res) => {
        const {
            CityId
        } = req.params;
        if (!CityId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TripService.read({
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
    transportUpdate: async (req, res) => {
        const {
            CityId
        } = req.params;
        if (!CityId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TripService.read({
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
    shoppingUpdate: async (req, res) => {
        const {
            CityId
        } = req.params;
        if (!CityId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TripService.read({
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
    snackUpdate: async (req, res) => {
        const {
            CityId
        } = req.params;
        if (!CityId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        TripService.read({
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
        TripService.allDelete({
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
