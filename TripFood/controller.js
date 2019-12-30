const TFService = require('./service');
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
        TFService.read({
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
    create: ({
        array,
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            let TF;
            const CityId = 1;
            try {
                for(let [key, value] of Object.entries(array)) {
                    for(let [key2, value2] of Object.entries(value)){
                        console.log(key2, value2);
                    TH = await TripFood.create({
                        grade: key2,
                        cost: value2, // 미디엄에서 가져오자.
                        TripId: TripId
                    });
                }
            };
            } catch (error) {
                reject({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, "rm.TRIPFOOD_CREATE_FAIL")
                });
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, "rm.TRIPFOOD_CREATE_SUCCESS", TH)
            });
        });
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
        TFService.update({
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
        TFService.delete({
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
