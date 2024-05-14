// controllers/TripController.js
const Trip = require('../models/Trip');

// Функція створення нового виїзду
exports.createTrip = async (req, res) => {
  try {
    const { destination, startDate, endDate, /* other data */ } = req.body;
    const newTrip = await Trip.create({
      destination,
      startDate,
      endDate,
      // other properties
    });
    res.status(201).json(newTrip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Функція додавання плану подорожі
exports.addTravelPlan = async (req, res) => {
  try {
    const { tripId, travelDate, planDescription, /* other data */ } = req.body;
    const trip = await Trip.findByPk(tripId);
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    const newTravelPlan = await trip.createTravelPlan({
      travelDate,
      planDescription,
      // other properties
    });
    res.status(201).json(newTravelPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Функція резервування готелю
exports.reserveHotel = async (req, res) => {
  try {
    const { tripId, hotelName, checkInDate, checkOutDate, /* other data */ } = req.body;
    const trip = await Trip.findByPk(tripId);
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    const newHotelReservation = await trip.createHotelReservation({
      hotelName,
      checkInDate,
      checkOutDate,
      // other properties
    });
    res.status(201).json(newHotelReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
