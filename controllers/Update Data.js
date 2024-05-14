// Controller for updating travel
exports.updateTravel = async (req, res) => {
    try {
      const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedTravel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller for updating hotel reservation
  exports.updateHotelReservation = async (req, res) => {
    try {
      const updatedHotelReservation = await HotelReservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedHotelReservation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller for updating attraction
  exports.updateAttraction = async (req, res) => {
    try {
      const updatedAttraction = await Attraction.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedAttraction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  