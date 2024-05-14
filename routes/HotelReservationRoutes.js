// routes/HotelReservationRoutes.js

const express = require('express');
const router = express.Router();
const hotelReservationController = require('../controllers/hotelReservationController');

// Routes for hotel reservation
router.get('/hotelReservations', hotelReservationController.getAllHotelReservations);
router.post('/hotelReservations', hotelReservationController.createHotelReservation);
router.put('/hotelReservations/:id', hotelReservationController.updateHotelReservation);
router.delete('/hotelReservations/:id', hotelReservationController.deleteHotelReservation);

module.exports = router;
