const TripList = require("../model/trip.model");

const addTripList = async (req, res) => {
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
      start,
      end,
      dayCount
    } = req.body;

    const booking = await TripList.create({
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
      start,
      end,
      dayCount
    });
    res.status(201).json({
      message: "Add trip list success Full",
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


const getTripList = async (req, res) => {
  try {
    const { id } = req.params;
    const allReadyExisting = await TripList.find({ userId: id });
    res.status(201).json(allReadyExisting);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};


module.exports = {addTripList , getTripList};  // Export the function to use in other files
