const {
    Food,
    Hotel
} = require('../models');

module.exports = {
    randomFood: async ({
        grade,
        CityId
    }) => { //grade 1,2,3은 내가 넣는대로 
        return new Promise(async (resolve, reject) => {
            const data = [];
            try {
                foodbyGrade = await Food.findAll({
                    where: {
                        grade: grade,
                        CityId: CityId
                    },
                    attributes: ['name', 'cost'],
                });
                const len = foodbyGrade.length;
                for (let i = 0; i < 3; i++) {
                    random = Math.floor(Math.random() * (len - 0));
                    data[i] = foodbyGrade[random].dataValues;
                }
                resolve({
                    json: data
                })
            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },

    randomHotel: async () => { //subCategory
        return new Promise(async (resolve, reject) => {
            const data = [];
            let i = 0;
            let j
            try {
                const promise = async (
                    subCategory,
                    CityId
                ) => {
                    cate = await Hotel.findAll({
                        where: {
                            subCategory: subCategory,
                            CityId: CityId
                        },
                        attributes: ['name', 'cost'],
                    });
                    const start = (subCategory - 2) * 3;
                    for (i = start; i < start + 3; i++) {
                        random = Math.floor(Math.random() * (cate.length - 0));
                        data[i] = cate[random].dataValues;;
                    }
                }
                Promise.all([promise(2, 1), promise(3, 1), promise(4, 1), promise(5, 1)]).then(function () {
                    resolve({
                        json: data
                    })
                })

            } catch (err) {
                console.log(err);
                reject(err);
            }
        })
    },
}