const HotelService = require('./service');
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
        HotelService.read({
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
            category,
            subCategory,
            cost
        } = req.body;
        const {
            CityId

        } = req.params; //*
      
        if (!name||!category||!subCategory||!cost) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        HotelService.create({
                name,
                category,
                subCategory,
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
    update: async (req, res) => { //name 수정안되게 제외 
        const { //*
            id,
            category,
            subCategory,
            cost
        } = req.body;
        const {
            CityId
        } = req.params; //*
        if (!id||!category || !subCategory ||!cost ) {
            const missParameters = Object.entries({
                    id,
                    category,
                    subCategory,
                    cost,
                    CityId
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        HotelService.update({
                id,
                category,
                subCategory,
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
            console.log(req.body);
            if (!id) {
                res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
                return;
            }
            
            HotelService.delete({
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
