// models/Trip.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const TravelPlan = require('./TravelPlan');
const HotelReservation = require('./HotelReservation');

class Trip extends Model {}

Trip.init({
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // other properties
}, {
  sequelize,
  modelName: 'Trip'
});

Trip.hasMany(TravelPlan);
Trip.hasMany(HotelReservation);

module.exports = Trip;
