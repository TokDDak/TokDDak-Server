const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const {Timeline} = require('../models');

module.exports = {
    read: ({
        TripId
    }) => {
        return new Promise(async (resolve, reject) => {
            const timeline = await Timeline.findAll({
                where:{
                    TripId : TripId
                }
            });
            if(timeline.length == 0) {
                resolve({
                    code : sc.NO_CONTENT,
                    json: utils.successFalse(sc.NO_CONTENT, rm.TIMELINE_EMPTY)
                });
                return;
            }
            if (!timeline) {
                resolve({
                    code : sc.INTERNAL_SERVER_ERROR,
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_READ_FAIL)
                });
                return;
            }
            resolve({
                code : sc.SUCCESS,
                json: utils.successTrue(sc.SUCCESS, rm.TIMELINE_READ_SUCCESS, timeline)
            });
        });
    },
    create:({
        day,
        cost,
        category,
        content,
        TripId
    })=>{
        return new Promise(async(resolve, reject)=>{
            let timeline;
            try{
                console.log("Timeline: ",Timeline)
                timeline = await Timeline.create({
                    day : day,
                    cost : cost,
                    category : category,
                    content : content,
                    TripId : TripId
                });
            }catch(error)
            {
                console.log(error)
                reject({
                    code : sc.INTERNAL_SERVER_ERROR,
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_CREATE_FAIL)
                });
            }
            resolve({
                code : sc.SUCCESS,
                json : utils.successTrue(sc.SUCCESS, rm.TIMELINE_CREATE_SUCCESS, timeline)
            })
        })
    },
    update:({ 
        id,
        day,
        cost,
        category,
        content,
        TripId
    })=>{
        return new Promise(async(resolve, reject)=>{
            let timeline;
            timeline = await Timeline.update({
                day : day,
                cost : cost,
                category : category,
                content : content,
                TripId : TripId
            },{
                where: {
                    id : id
                }
            });
            if(!timeline){
                reject({
                    code : sc.INTERNAL_SERVER_ERROR,
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_UPDATE_FAIL)
                })
                return;
            }
            resolve({
                code : sc.SUCCESS,
                json : utils.successTrue(sc.SUCCESS, rm.TIMELINE_UPDATE_SUCCESS)
            });
        });
    },
    delete: ({id})=> {
        return new Promise(async (resolve, reject)=>{
            try{
                timeline = await Timeline.findAll({
                    where : {
                        id : id
                    }
                })
                if(timeline.length == 0)
                {
                    resolve({
                        code : sc.NO_CONTENT,
                        json : utils.successFalse(sc.NO_CONTENT, rm.TIMELINE_EMPTY)
                    });
                    return;
                }
                timeline = await Timeline.destroy({
                    where:{
                        id : id
                    }
                });
            }catch(error)
            {
                reject({
                    code : sc.INTERNAL_SERVER_ERROR,
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_DELETE_FAIL)
                })
            }
            resolve({
                code : sc.SUCCESS,
                json : utils.successTrue(sc.SUCCESS, rm.TIMELINE_DELETE_SUCCESS)
            })
        })
    }
}