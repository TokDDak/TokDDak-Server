const {
    Median
} = require('../models');

module.exports = {
    hotelRead: async ({
        CityId,
        grade
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const median = await Median.findOne({
                    where: {
                        CityId: CityId,
                        category: grade,
                    }
                })
//                console.log(median.dataValues.category, median.dataValues.hotel);
                const result = median.dataValues.hotel;
                resolve({
                    result
                });
            } catch (err) {
                console.log(err);
                reject(err);
            }
        });
    },
    foodRead: async ({
        CityId,
        grade
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const median = await Median.findOne({
                    where: {
                        CityId: CityId,
                        category: grade,
                    }
                })
//                console.log(median.dataValues.category, median.dataValues.food);
                const result = median.dataValues.food;
                resolve({
                    result
                });
            } catch (err) {
                console.log(err);
                reject(err);
            }
        });
    },
}