const express = require('express');
const router = express.Router({mergeParams: true});

const exchange = require('../module/exchange');
const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');

toKRW={
    toKRW : async({base, cost})=>{
       
        if(!cost || !base){
            return {
                json : utils.successFalse(sc.BAD_REQUEST, rm.NULL_VALUE)
            }
        }
        console.log(base)
        const result = await exchange.exchange(base, cost, "KRW"); // 이게 돌아는가는데 전달은 안돼 
        console.log("여기까지 못와 ", result);
        if(!result) {
            return{
                json : utils.successFalse("실패")
            }
        }
        return{
            json : result
        }
}
    
}

router.get('/',async(req, res)=>{
    try{
        const {
            base,
            cost
            
        } = req.body;
        console.log("cost : ", cost);
        console.log("base : ", base);
        const json = await toKRW.toKRW({base, cost});
        console.log("json: ",json);
        res.send( json);
    }
    catch(err)
    {
        console.log(err);
        res.send("실패2");
    }
})
        
module.exports = router;