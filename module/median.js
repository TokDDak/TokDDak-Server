const {
    Median
} = require('../models');

module.exports = {
    read: async ({
        CityId,
        grade
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const median = await Median.findOne({
                    where: {
                        id: CityId,
                        category: grade,
                    },
                })
                const result = median.dataValues.cost;
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