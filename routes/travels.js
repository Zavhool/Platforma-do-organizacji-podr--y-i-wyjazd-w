const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');


router.get('/', travelController.getAllTravels);


router.post('/', travelController.createTravel);


router.get('/:id', travelController.getTravelById);


router.post('/:id/plans', travelController.addPlanToTravel);


router.post('/:id/hotels', travelController.bookHotel);

module.exports = router;
