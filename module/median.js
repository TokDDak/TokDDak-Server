const {
    Median
} = require('../models');

module.exports = {
    read: async ({
        CityId,
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const median = await Median.findOne({
                    where: {
                        id: CityId,
                    },
                })
                const result = median.dataValues;
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