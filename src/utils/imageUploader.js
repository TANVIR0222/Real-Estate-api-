import { v2 as cloudinary } from 'cloudinary';


const uploadImageToCloudinary = async(image) => {      
   cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET, 
      });
    return await cloudinary.uploader.upload(image);
}


export default  uploadImageToCloudinary;

