const express = require('express');
const router = express.Router({mergeParams: true});
const tripController = require('../Trip/controller');

/* City */
/**
 * 특정 id Trip 정보를 가져온다.
 * */
router.get('/id',tripController.read);
/**
 * 여행 후보인 trip
 * status가 1이면 여행 후보
 * */
router.get('/', tripController.scheduleRead);
/**
 * 여행 중인 trip
 * status가 2이면 여행 중
 * */
router.get('/ing', tripController.trippingRead);
/**
 * 지난여행 trip
 * status가 3이면 여행 끝 
 * */
router.get('/ed', tripController.trippedRead);
/**
 * 
 */
router.post('/:CityId', tripController.create);
/**
 * status 값 바꾸기
 */
/**
 * trippingUpdate, trippedUpdate에 환율 API 사용
 */
router.put('/ing',tripController.trippingUpdate);
router.put('/ed',tripController.trippedUpdate);

router.delete('/', tripController.delete);

module.exports = router;
