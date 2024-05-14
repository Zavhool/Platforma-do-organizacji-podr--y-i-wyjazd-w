// Controller for deleting travel
exports.deleteTravel = async (req, res) => {
    try {
      await Travel.findByIdAndDelete(req.params.id);
      res.json({ message: 'Travel deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Controller for deleting hotel reservation
  exports.deleteHotelReservation = async (req, res) => {
    try {
      await HotelReservation.findByIdAndDelete(req.params.id);
      res.json({ message: 'Hotel reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Controller for deleting attraction
  exports.deleteAttraction = async (req, res) => {
    try {
      await Attraction.findByIdAndDelete(req.params.id);
      res.json({ message: 'Attraction deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  