const multer = require("multer");
const Listing = require("../model/list.model");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const addProperty = async (req, res) => {
  // console.log(req);
  
  try {
    const {
      userId,
      category,
      type,
      streetAddress,
      aptSuity,
      city,
      Province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      descriptions,
      price,
    } = req.body;

    console.log(
      userId,
      category,
      type,
      streetAddress,
      aptSuity,
      city,
      Province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      descriptions,
      price
    );

    if (
      !userId ||
      !category ||
      !type ||
      !streetAddress ||
      !aptSuity ||
      !city ||
      !Province ||
      !country ||
      !guestCount ||
      !bedroomCount ||
      !bedCount ||
      !bathroomCount ||
      !amenities ||
      !title ||
      !descriptions ||
      !price
    ) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // const photoList = req.file;
    // if (!photoList) {
    //   return res.status(400).json({ message: "Please upload a photo" });
    // }

    // console.log(photoList," gggh");

    // const listingPhotoPath = photoList.map((file) => file.path);
    const property = new Listing({
      userId,
      category,
      type,
      streetAddress,
      aptSuity,
      city,
      Province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      descriptions,
      price,
    });
    await property.save();
    res.status(201).json({
      message: "Property added successfully",
      success: true,
      data: property,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .json({ message: error.message || error, success: false, error: true });
  }
};

const categoryProperty = async (req, res) => {
  try {
    const qCategory = req.query.category;
    // const properties = await Listing.find({ category });

    let listing;
    if (qCategory) {
      listing = await Listing.find({ category: qCategory }).populate(
        "category"
      );
    } else {
      listing = await Listing.find().populate("category");
    }

    res.status(200).json({
      message: "Properties found successfully",
      success: true,
      data: listing,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .json({ message: error.message || error, success: false, error: true });
  }
};

module.exports = { upload, addProperty, categoryProperty }; //export the multer instance to use in other files
