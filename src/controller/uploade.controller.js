const uploadImageToCloudinary = require("../utils/imageUploader");

const uploadeImage = async (req, res) => {
  try {
    const file = req.file;

    const image = await uploadImageToCloudinary(file.path);

    res.status(201).json({
      message: "Property added successfully",
      success: true,
      data: image.secure_url,
      error: false,
    });
  } catch (error) {
    res
      .status(201)
      .json({ message: error.message || error, success: false, error: true });
  }
};

module.exports = uploadeImage;
