const express = require('express');
const router = express.Router();
const cityController = require('../City/controller');
const activityController = require('../Activity/controller');
const foodController = require('../Food/controller');
const hotelController = require('../Hotel/controller');
const shoppingController = require('../Shopping/controller');
const snackController = require('../Snack/controller');
const transportController = require('../Transportation/controller');

/* City */
router.get('/city', cityController.readAll); //ok
router.get('/country', cityController.countryRead); //ok
router.post('/',cityController.create); //ok
router.put('/',cityController.update);
router.delete('/',cityController.delete); //ok

/* Activity */
router.get('/:CityId', activityController.read);
router.post('/:CityId', activityController.create);
router.put('/:CityId', activityController.update);
router.delete('/:CityId', activityController.delete);

/* Shopping */
router.get('/:CityId', shoppingController.read);
router.post('/:CityId', shoppingController.create);
router.put('/:CityId', shoppingController.update);
router.delete('/:CityId', shoppingController.delete);

/* Snack */
router.get('/:CityId', snackController.read);
router.post('/:CityId', snackController.create);
router.put('/:CityId', snackController.update);
router.delete('/:CityId', snackController.delete);

/* Transportation */
router.get('/:CityId', transportController.read);
router.post('/:CityId', transportController.create);
router.put('/:CityId', transportController.update);
router.delete('/:CityId', transportController.delete);

/* Food */
router.get('/:CityId', foodController.read);
router.post('/:CityId', foodController.create);
router.put('/:CityId', foodController.update);
router.delete('/:CityId', foodController.delete);

/* Hotel */
router.get('/:CityId', hotelController.read);
router.post('/:CityId', hotelController.create);
router.put('/:CityId', hotelController.update);
router.delete('/:CityId', hotelController.delete);

module.exports = router;
