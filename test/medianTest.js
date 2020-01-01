const Median = require('../module/median');

const cityId = 1;
Median.hotelRead({
    cityId,
    })
    .then(({
            result
        }) =>
        console.log("result : ", result)
    ).catch(err => {
        console.log(err);
    })