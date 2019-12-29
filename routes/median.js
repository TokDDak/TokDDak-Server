const express = require('express');
const router = express.Router({mergeParams: true});
const medianController = require('../Median/controller');

/**
 * 최고급(best) hotel 무작위 3개
 */
router.get('/bestHotel', medianController.bestHotelRead);

/**
 * 고급(high) hotel 무작위 3개
 */
router.get('/highHotel', medianController.bestHotelRead);
/**
 * 일반(normal) hotel 무작위 3개
 */
router.get('/normalHotel', medianController.normalHotelRead);
/**
 * 아파트(apart) 무작위 3개
 */
router.get('/apart', medianController.apartRead);
/**
 * 일반(normal) hotel 무작위 3개
 */
router.get('/hostel', medianController.hostelRead);

/**
 * 고급(high) food 무작위 3개
 */
router.get('/highFood', medianController.highFoodRead);
/**
 * 일반(normal) food 무작위 3개
 */
router.get('/normalFood', medianController.normalFoodRead);
/**
 * 싼(cheap) food 무작위 3개
 */
router.get('/cheapFood', medianController.cheapFoodRead);

module.exports = router;
