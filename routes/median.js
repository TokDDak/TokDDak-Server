const express = require('express');
const router = express.Router({mergeParams: true});
const medianController = require('../Median/controller');

/**
 * 한 번에 무작위 3개 + 모든 카테고리 별 중간값 전송 (호텔)
 */
router.get('/:CityId/hotel', medianController.hotelRead);
router.get('/:CityId/hoteliOS', medianController.hotelReadiOS);
/**
 * 모든 카테고리 별 중간값 전송 (음식)
 */
router.get('/:CityId/food', medianController.foodRead);
/**
 * 모든 카테고리 별 중간값 전송 (간식)
 */
router.get('/:CityId/snack', medianController.snackRead);

module.exports = router;
