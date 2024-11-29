const Booking = require("../model/booking.model");
const Listing = require("../model/list.model");

const addBooking = async (req, res) => {
  try {
    const {
      userId,
      propertyId,
      category,
      type,
      city,
      Province,
      country,
      listingPhotoPath,
      title,
      descriptions,
      price,
    } = req.body;

    const allReadyExisting = await Booking.findOne({ propertyId });
    if (allReadyExisting) {
      return res.status(400).json({ message: "Booking already exist" });
    }

    const booking = await Booking.create({
      userId,
      propertyId,
      category,
      type,
      city,
      Province,
      country,
      listingPhotoPath,
      title,
      descriptions,
      price,
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

const fovoriteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const allReadyExisting = await Booking.find({ userId: id });
    res.status(201).json(allReadyExisting);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};
const fovoritBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const allReadyExisting = await Listing.find({ id });
    res.status(201).json(allReadyExisting);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};

module.exports = { addBooking, fovoriteBooking };
