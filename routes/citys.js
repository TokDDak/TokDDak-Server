const express = require('express');
const upload = require('../config/multer');
const router = express.Router({mergeParams: true});
const cityController = require('../City/controller');
const activityController = require('../Activity/controller');
const foodController = require('../Food/controller');
const hotelController = require('../Hotel/controller');
const shoppingController = require('../Shopping/controller');
const snackController = require('../Snack/controller');
const transportController = require('../Transport/controller');

/* City */
router.get('/city', cityController.readAll); //ok
router.get('/country', cityController.countryRead); //ok
router.post('/',cityController.create); //ok
router.put('/',cityController.update); //@@
router.delete('/',cityController.delete); //ok

/* Activity */
router.get('/:CityId/Activity', activityController.read); //ok
router.post('/:CityId/Activity', activityController.create);//ok
router.put('/:CityId/Activity', activityController.update); //@@
router.delete('/:CityId/Activity', activityController.delete); //@@

/* Shopping */
router.get('/:CityId/Shopping', shoppingController.read);
router.post('/:CityId/Shopping', shoppingController.create);
router.put('/:CityId/Shopping', shoppingController.update);
router.delete('/:CityId/Shopping', shoppingController.delete);

/* Snack */
router.get('/:CityId/Snack', snackController.read);
router.post('/:CityId/Snack', snackController.create);
router.put('/:CityId/Snack', snackController.update);
router.delete('/:CityId/Snack', snackController.delete);

/* Transport */
router.get('/:CityId/Transport', transportController.read);
router.post('/:CityId/Transport', transportController.create);
router.put('/:CityId/Transport', transportController.update);
router.delete('/:CityId/Transport', transportController.delete);

/* Food */
router.get('/:CityId/Food', foodController.read);
router.post('/:CityId/Food', foodController.create);
router.put('/:CityId/Food', foodController.update);
router.delete('/:CityId/Food', foodController.delete);

/* Hotel */
router.get('/:CityId/Hotel', hotelController.read);
router.post('/:CityId/Hotel', hotelController.create);
router.put('/:CityId/Hotel', hotelController.update);
router.delete('/:CityId/Hotel', hotelController.delete);

module.exports = router;
