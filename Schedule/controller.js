const ScheduleService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

module.exports = {
    create: async (req, res) => {
        const {
            day, // 받은 파라미터
            cost,
            category,
            content
        } = req.body;
        const {
            TripId
        } = req.params;
        if (!day || !cost || !category || !content) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        ScheduleService.create({
                day, // 받은 파라미터
                cost,
                category,
                content,
                TripId
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                res.send(err);
            })
    },
    read: async (req, res) => {
        const {
            TripId
        } = req.params;
        if (!TripId) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        ScheduleService.read({
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
    // update: async (req, res) => {
    //     const {
    //         id,
    //         cost
    //     } = req.body;
    //     const {
    //         CityId
    //     } = req.params;
    //     if (!id || !cost) {
    //         const missParameters = Object.entries({
    //                 id,
    //                 cost,
    //                 CityId
    //             })
    //             .filter(it => it[1] == undefined).map(it => it[0]).join(',');
    //         res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
    //         return;
    //     }
    //     ShopService.update({id, cost, CityId})
    //     .then(({
    //         json
    //     }) => 
    //         res.send(json)
    //     ).catch(err => {
    //         console.log(err);
    //         res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    //     })
    // },
    delete: async (req, res) => {
        const {
            id
        } = req.body;
        if (!id) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        ScheduleService.delete({
                id
            })
            .then(({
                json
            }) => res.send(json)).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR)); // 여기서 걸리는데,,,(?)

            })
    },
}