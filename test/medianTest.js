const Median = require('../module/median');

const CityId = 1;
const subCategory = 4;
Median.hotelReadiOS({
    CityId,
    subCategory
    })
    .then(({
            result
        }) =>
        console.log("result : ", result)
    ).catch(err => {
        console.log(err);
    })