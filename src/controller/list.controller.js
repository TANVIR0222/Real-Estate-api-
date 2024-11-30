const Listing = require("../model/list.model");

const addProperty = async (req, res) => {
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
      listingPhotoPath,
    } = req.body;
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
      !listingPhotoPath ||
      !price
    ) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
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
      listingPhotoPath,
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
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};

const categoryProperty = async (req, res) => {
  try {
    // console.log(req.query)
    const qCategory = req.query.category;
    let listing;
    if (qCategory) {
      listing = await Listing.find({ category: qCategory });
    } else {
      listing = await Listing.find().populate("category");
    }
    res.status(200).json(listing);

    // Listing.fi
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};

const singleProperty = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Listing.findById(id);
    res.status(201).json(products);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message || error, success: false, error: true });
  }
};


const productSearch = async(req,res) => {
  try {

    const {search = ""} = req.query;    
    const searchResult =  search ? {title :{$regex : search , $options: "i" } }  : {}
    const products = await Listing.find(searchResult)
    res
    .status(201)
    .json(products);
    
  } catch (error) {
    res
    .status(404)
    .json({ message: error.message || error, success: false, error: true });
  }
}

module.exports = { addProperty, categoryProperty, singleProperty , productSearch}; //export the multer instance to use in other files
