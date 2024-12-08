import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    propertyId: {
      type: String,
      required: true,
    },
    category:{
      type:String,
      required:true
    },
    type:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    Province:{
      type:String,
      required:true
    },
    country:{
      type : Array,
      default : []
    },
    listingPhotoPath:{
      type : Array,
      default : []
    },
    title:{
      type:String,
      required:true
    },
    descriptions:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
