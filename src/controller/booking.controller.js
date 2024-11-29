const Booking = require("../model/booking.model");

const addBooking = async (req, res) => {
  try {
    const { userId, propertyId } = req.body;

    const allReadyExisting = await Booking.findOne({ propertyId });
    if (allReadyExisting) {
      return res.status(400).json({ message: "Booking already exist" });
    }

    const booking = await Booking.create({
      userId,
      propertyId,
    });
    res.status(201).json({
      message: "Add success Full",
      success: true,
      error: false,
      booking,
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};

module.exports = { addBooking };
