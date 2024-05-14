// models/Travel.js

const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String }
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
