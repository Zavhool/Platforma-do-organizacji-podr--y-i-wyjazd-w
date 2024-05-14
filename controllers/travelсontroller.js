const Travel = require('../models/Travel');

exports.getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createTravel = async (req, res) => {
  const travel = new Travel({
    destination: req.body.destination,
    date: req.body.date,
    plans: [],
    hotels: []
  });

  try {
    const newTravel = await travel.save();
    res.status(201).json(newTravel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    res.status(200).json(travel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.addPlanToTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    travel.plans.push({
      description: req.body.description,
      date: req.body.date
    });
    await travel.save();
    res.status(200).json(travel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.bookHotel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    travel.hotels.push({
      name: req.body.name,
      checkInDate: req.body.checkInDate,
      checkOutDate: req.body.checkOutDate
    });
    await travel.save();
    res.status(200).json(travel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
