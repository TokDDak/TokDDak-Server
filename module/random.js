const {Food} = require('../models');
const {Hotel} = require('../models');

module.exports = {
   
    
    randomFood : async(grade,CityId)=> { //grade 1,2,3은 내가 넣는대로 
        return new Promise(async(resolve, reject)=>{
            const data = [];
            try{
                grade1 = await Food.findAll({
                    where : {
                        grade : grade,
                        CityId : CityId
                    }
                });
                console.log(grade1.length);
                var arrId = new Array();
                for(var i=0; i<grade1.length; i++) {
                    arrId[i] = grade1[i].id;
                }
              
                for(var i=0; i<3 ; i++)
                {
                    random = Math.floor(Math.random()*(grade1.length - 0));
                    data[i] = grade1[random];
                }
                resolve({
                    json : utils.successTrue(data)
                })
            }catch(err){
                console.log(err);
                reject(err);
            }
        })
    },
    // Hotel을 어떻게할까..? subcategory 선기준 ?
    randomHotel : async(subCategory,CityId)=> { //grade 1,2,3은 내가 넣는대로 
        return new Promise(async(resolve, reject)=>{
            const data = [];
            try{
                cate = await Food.findAll({
                    where : {
                        subCategory : subCategory,
                        CityId : CityId
                    }
                });
                console.log(cate.length);
                var arrId = new Array();
                for(var i=0; i<cate.length; i++) {
                    arrId[i] = cate[i].id;
                }
              
                for(var i=0; i<3 ; i++)
                {
                    random = Math.floor(Math.random()*(cate.length - 0));
                    data[i] = cate[random];
                }
                resolve({
                    json : utils.successTrue(data)
                })
            }catch(err){
                console.log(err);
                reject(err);
            }
        })
    },
   
}