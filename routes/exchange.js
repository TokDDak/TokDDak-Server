const express = require('express');
const router = express.Router({
    mergeParams: true
});

const Exchange = require('../module/exchange');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');


router.get('/toKRW', async (req, res) => {
    const {
        base,
        cost
    } = req.body;

    Exchange.exchange({
        base: base,
        cost: cost,
        to: "KRW"
    }).then(({
        result
    }) => {
        res.send(utils.successTrue(sc.SUCCESS, rm.EXCHANGE_TOKRW_SUCCESS,result))
    }).catch(err => {
        console.log(err)
    })

});
router.get('/fromKRW', async (req, res) => {
    const {
        cost,
        to
    } = req.body;

    Exchange.exchange({
        base: "KRW",
        cost: cost,
        to: to
    }).then(({
        result
    }) => {
        res.send(utils.successTrue(sc.SUCCESS, rm.EXCHANGE_FROMKRW_SUCCESS,result))
    }).catch(err => {
        console.log(err)
    })

});
module.exports = router;