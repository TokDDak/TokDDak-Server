const {
    Median
} = require('../models');

module.exports = {
    read: async ({
        cityId,
        grade
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const median = await Median.findOne({
                    where: {
                        cityId: cityId,
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