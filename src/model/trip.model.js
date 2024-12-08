import mongoose from "mongoose";

const tripSchema = mongoose.Schema(
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
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    Province: {
      type: String,
      required: true,
    },
    country: {
      type: Array,
      default: [],
    },
    listingPhotoPath: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    dayCount: {
      type: Number,
      required: true,
    },
    hidden: {
      type: String,
      default: 'hidden'
    },
    
  },
  { timestamps: true }
);
const TripList = mongoose.model("TripList", tripSchema);
export default TripList;
