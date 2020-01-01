const {Food} = require('../models');
const {Hotel} = require('../models');

module.exports = {
   
    
    randomFood : async(grade,CityId)=> { //grade 1,2,3은 내가 넣는대로 
        return new Promise(async(resolve, reject)=>{
            const data = [];
            try{
                foodbyGrade = await Food.findAll({
                    where : {
                        grade : grade,
                        CityId : CityId
                    }
                });
                console.log(foodbyGrade.length);
                var arrId = new Array();
                for(var i=0; i<foodbyGrade.length; i++) {
                    arrId[i] = foodbyGrade[i].id;
                }
              
                for(var i=0; i<3 ; i++)
                {
                    random = Math.floor(Math.random()*(foodbyGrade.length - 0));
                    //data[i] = grade1[random];
                    for(var j =0;j<foodbyGrade.length; j++)
                    {
                        if(foodbyGrade[j].id == arrId[random])
                        {
                            data[i] = foodbyGrade[j];
                        }
                    }
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
    
    randomHotel : async(subCategory,CityId)=> { //subCategory
        return new Promise(async(resolve, reject)=>{
            const data = [];
            try{
                cate = await Hotel.findAll({
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