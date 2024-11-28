const cloudinary = require("cloudinary").v2;
// require('dotenv').config();


const uploadImageToCloudinary = async(image) => {      
   cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET, 
      });
    return await cloudinary.uploader.upload(image);
}


module.exports = uploadImageToCloudinary;

