const Random = require('../module/random');

const grade = 3;
const CityId = 1;
const subCategory = 3;
Random.randomFood({
        CityId,
        grade
    })
    .then(({
            json
        }) =>
        console.log("json: ",json)
    ).catch(err => {
        console.log(err);
    })
Random.randomHotel({
        subCategory,
        CityId
    })
    .then(({
            json
        }) =>
        console.log("json: ", json)
    ).catch(err => {
        console.log(err);
    })
