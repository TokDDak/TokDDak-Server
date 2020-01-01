const TimelineService = require('./service');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

module.exports = {
    read: async (req, res) => {
        TimelineService.read()
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(err => {
                console.log(err);
                res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR))
            });
    },
    create: async (req, res) => {
        const {
            day,
            cost,
            category,
            content
        } = req.body;
        TimelineService.create({
                day,
                cost,
                category,
                content
            })
            .then(({
                    json
                }) =>
                res.send(json)
            ).catch(error => {
                res.send(error);
            })
    },
    update: async (req, res) => {
        const {
            id,
            day,
            cost,
            category,
            content
        } = req.body;
        if (!id || !day || !cost || !category || !content) {
            const missParameters = Object.entries({
                    id,
                    day,
                    cost,
                    category,
                    content
                })
                .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.send(utils.successFalse(sc.BAD_REQUEST, `${rm.NULL_VALUE}, ${missParameters}`));
            return;
        }
        TimelineService.update({
            id,
            day,
            cost,
            category,
            content
        })
        .then(({
            json
        })=>
        res.send(json)
        ).catch(err=> {
            console.log(err);
            res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR))
        })
    },
    delete: async(req, res)=>{
        const{
            id
        } = req.body;
        if(!id){
            res.send(utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE))
            return;
        }
        TimelineService.delete({
            id
        })
        .then(({
            json
        })=>
        res.send(json)
        ).catch(err=>{
            console.log(err);
            res.send(utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR))
        })
    }
}