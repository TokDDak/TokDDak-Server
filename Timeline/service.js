/* Timeline */ 
// - token 확인 미들웨어 추가 x
// - day : moment사용? x
// - responseMessage 추가 
// - 필드 중에 수정 못하게 할것들 있어? 

const rm = require('../module/util/responseMessage');
const utils = require('../module/util/utils');
const sc = require('../module/util/statusCode');
const {Timeline} = require('../models');

module.exports = {
    read: () => {
        return new Promise(async (resolve, reject) => {
            const timeline = await Timeline.findAll({});
            if(timeline.length == 0) {
                resolve({
                    json: utils.successFalse(sc.NO_CONTENT, rm.TIMELINE_EMPTY)
                });
                return;
            }
            if (!timeline) {
                resolve({
                    json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_READ_FAIL)
                });
                return;
            }
            resolve({
                json: utils.successTrue(sc.SUCCESS, rm.TIMELINE_READ_SUCCESS, timeline)
            });
        });
    },
    create:({
        day,
        cost,
        category,
        content
    })=>{
        return new Promise(async(resolve, reject)=>{
            let timeline;
            try{
                console.log("Timeline: ",Timeline)
                timeline = await Timeline.create({
                    day : day,
                    cost : cost,
                    category : category,
                    content : content
                });
            }catch(error)
            {
                console.log(error)
                reject({
                    
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_CREATE_FAIL)
                });
            }
            resolve({
                json : utils.successTrue(sc.SUCCESS, rm.TIMELINE_CREATE_SUCCESS, timeline)
            })
        })
    },
    update:({ 
        id,
        day,
        cost,
        category,
        content
    })=>{
        return new Promise(async(resolve, reject)=>{
            let timeline;
            timeline = await Timeline.update({
                day : day,
                cost : cost,
                category : category,
                content : content
            },{
                where: {
                    id : id
                }
            });
            if(!timeline){
                reject({
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_UPDATE_FAIL)
                })
                return;
            }
            resolve({
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
                    json : utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.TIMELINE_DELETE_FAIL)
                })
            }
            resolve({
                json : utils.successTrue(sc.SUCCESS, rm.TIMELINE_DELETE_SUCCESS)
            })
        })
    }
}