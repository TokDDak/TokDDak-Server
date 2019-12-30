const express = require('express');
const router = express.Router({mergeParams: true});
const medianController = require('../Median/controller');

// 
/**
 * 한 번에 무작위 3개 + 모든 카테고리 별 중간값 전송 (호텔)
 */
router.get('/:CityId/hotel', medianController.hotelRead);
/**
 * 한 번에 무작위 3개 + 모든 카테고리 별 중간값 전송 (음식)
 */
router.get('/:CityId/hotel', medianController.foodRead);
/**
 * 한 번에 무작위 3개 + 모든 카테고리 별 중간값 전송 (간식)
 */
router.get('/:CityId/hotel', medianController.snackRead);

// 따로따로 라우터로 보내주기
// /**
//  * 최고급(best) hotel 무작위 3개
//  * Median 값
//  */
// router.get('/:CityId/bestHotel', medianController.bestHotelRead);
// router.get('/:CityId/bestHotelMedian', medianController.bestHotelMedian);
// /**
//  * 고급(high) hotel 무작위 3개
//  */
// router.get('/:CityId/highHotel', medianController.highHotelRead);
// router.get('/:CityId/highHotelMedian', medianController.highHotelMedian);
// /**
//  * 일반(normal) hotel 무작위 3개
//  */
// router.get('/:CityId/normalHotel', medianController.normalHotelRead);
// router.get('/:CityId/normalHotelMedian', medianController.normalHotelMedian);
// /**
//  * 아파트(apart) 무작위 3개
//  */
// router.get('/:CityId/apart', medianController.apartRead);
// router.get('/:CityId/apartMedian', medianController.apartMedian);
// /**
//  * 일반(normal) hotel 무작위 3개
//  */
// router.get('/:CityId/hostel', medianController.hostelRead);
// router.get('/:CityId/hostelMedian', medianController.hostelMedian);
// /**
//  * 고급(high) food 무작위 3개
//  */
// router.get('/:CityId/highFood', medianController.highFoodRead);
// router.get('/:CityId/highFoodMedian', medianController.highFoodMedian);

// /**
//  * 일반(normal) food 무작위 3개
//  */
// router.get('/:CityId/normalFood', medianController.normalFoodRead);
// router.get('/:CityId/normalFoodMedian', medianController.normalFoodMedian);
// /**
//  * 싼(cheap) food 무작위 3개
//  */
// router.get('/:CityId/cheapFood', medianController.cheapFoodRead);
// router.get('/:CityId/cheapFoodMedian', medianController.cheapFoodMedian);
module.exports = router;
