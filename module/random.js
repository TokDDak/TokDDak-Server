const { Food, Hotel } = require('../models');

module.exports = {
    randomFood : async ({grade,CityId})=> { //grade 1,2,3은 내가 넣는대로 
        return new Promise(async(resolve, reject)=>{
            const data = [];
            try{
                foodbyGrade = await Food.findAll({
                    where : {
                        grade : grade,
                        CityId : CityId
                    },
                    attributes: ['id', 'name', 'grade', 'cost'],
                });
<<<<<<< HEAD
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
=======
                const len = foodbyGrade.length; 
                console.log("len : ", len);             
                for(let i=0; i<3 ; i++)
                {
                    random = Math.floor(Math.random()*(len - 0));
                    data[i] = foodbyGrade[random].dataValues;
>>>>>>> func/median
                }
                resolve({
                    json : data
                })
            }catch(err){
                console.log(err);
                reject(err);
            }
        })
    },
    
    randomHotel : async({subCategory,CityId})=> { //subCategory
        return new Promise(async(resolve, reject)=>{
            const data = [];
            try{
                cate = await Hotel.findAll({
                    where : {
                        subCategory : subCategory,
                        CityId : CityId
                    },
                    attributes: ['name', 'cost'],
                });
              
                for(let i=0; i<3 ; i++)
                {
                    random = Math.floor(Math.random()*(cate.length - 0));
                    data[i] = cate[random].dataValues;;
                }
                resolve({
                    json : data
                })
            }catch(err){
                console.log(err);
                reject(err);
            }
        })
    },
   
}