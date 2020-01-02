const express = require('express');
const router = express.Router({
    mergeParams: true
});
const scheduleController = require('../Schedule/controller');

/* Schedule */
/**
 * 특정 TripId에 해당하는 schedule 정보를 가져온다.
 * */
router.get('/:TripId', scheduleController.read);

/**
 * 특정 TripId에 해당되는 특정 day의 schedule 정보를 가져온다.
 */
router.get('/:TripId/:day', scheduleController.readByDay);

/**
 * schedule을 생성한다.
 */
router.post('/', scheduleController.create);

module.exports = router;