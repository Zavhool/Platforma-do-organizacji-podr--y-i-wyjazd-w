// routes/attractionRoutes.js

const express = require('express');
const router = express.Router();
const attractionController = require('../controllers/attractionController');

// Routes for attraction
router.get('/attractions', attractionController.getAllAttractions);
router.post('/attractions', attractionController.createAttraction);
router.put('/attractions/:id', attractionController.updateAttraction);
router.delete('/attractions/:id', attractionController.deleteAttraction);

module.exports = router;
