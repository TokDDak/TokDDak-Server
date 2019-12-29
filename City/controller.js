const CityService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const upload = require('../config/multer');
const multer = require('multer');

module.exports = {
    readAll: async (req, res) => {
        CityService.readAll()
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
            });
    },
    countryRead: async (req, res) => { //* countryRead라는게 어디 나라에 속하는지만 보여주는거야?
        const {
            country
        } = req.body;
        if (!country) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        CityService.countryRead({
                country
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
            continent,
            country,
            name,
            popular,
            recommend
        } = req.body;
        const img = req.file.location; //*
    
        if (!continent||!country||!name||!popular||!recommend||!img) {
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE));
            return;
        }
        CityService.create({
                continent,
                country,
                name,
                popular,
                recommend,
                img
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
            continent,
            country,
            name,
            popular,
            recommend
        } = req.body;
        const img = req.file.location; //*
    
        if (!id || !continent || !country || !name || !popular || !recommend || !img) {
            const missParameters = Object.entries({
                    id,
                    continent,
                    country,
                    name,
                    popular,
                    recommend,
                    img
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        CityService.update({ 
            id,
            continent,
            country,
            name,
            popular,
            recommend,
            img
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
        CityService.delete({
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
