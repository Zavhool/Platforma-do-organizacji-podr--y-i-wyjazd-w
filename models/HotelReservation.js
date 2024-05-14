// models/HotelReservation.js

const mongoose = require('mongoose');

const hotelReservationSchema = new mongoose.Schema({
  travelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Travel', required: true },
  hotelName: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true }
});

const HotelReservation = mongoose.model('HotelReservation', hotelReservationSchema);

module.exports = HotelReservation;
