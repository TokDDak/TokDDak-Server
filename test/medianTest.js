const Median = require('../module/median');
const grade = "일반 음식";
const cityId = 1;
Median.read({
        cityId,
        grade
    })
    .then(({
            result
        }) =>
        console.log("result : ", result)
    ).catch(err => {
        console.log(err);
    })