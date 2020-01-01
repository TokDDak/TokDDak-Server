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
                const len = foodbyGrade.length;              
                for(let i=0; i<3 ; i++)
                {
                    random = Math.floor(Math.random()*(len - 0));
                    data[i] = foodbyGrade[random].dataValues;
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
                    attributes: ['name', 'subCategory', 'cost'],
                });
                let arrId = new Array();
                for(let i=0; i<cate.length; i++) {
                    arrId[i] = cate[i].id;
                }
              
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