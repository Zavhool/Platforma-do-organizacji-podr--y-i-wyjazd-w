const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true }
});

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true }
});

const travelSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  plans: [planSchema],
  hotels: [hotelSchema]
});

module.exports = mongoose.model('Travel', travelSchema);
