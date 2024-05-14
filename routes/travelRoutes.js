// routes/travelRoutes.js

const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

// Routes for travel
router.get('/travels', travelController.getAllTravels);
router.post('/travels', travelController.createTravel);
router.put('/travels/:id', travelController.updateTravel);
router.delete('/travels/:id', travelController.deleteTravel);

module.exports = router;
