// models/Attraction.js

const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
  travelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Travel', required: true },
  name: { type: String, required: true },
  location: { type: String },
  description: { type: String }
});

const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;
