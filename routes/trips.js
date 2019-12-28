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
router.post('', tripController.initCreate);
router.put('/hotel', tripController.hotelUpdate);
router.put('/food', tripController.foodUpdate);
router.put('/activity', tripController.activityUpdate);
router.put('/transport', tripController.transportUpdate);
router.put('/shopping', tripController.shoppingUpdate);
router.put('/snack', tripController.snackUpdate);

router.delete('', tripController.allDelete);
router.delete('/hotel', tripController.hotelDelete);
router.delete('/food', tripController.foodDelete);
router.delete('/activity', tripController.activityDelete);
router.delete('/transport', tripController.transportDelete);
router.delete('/shopping', tripController.shoppingDelete);
router.delete('/snack', tripController.snackDelete);
module.exports = router;
