import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    streetAddress:{
        type: String,
        required: true
    },
    aptSuity: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    Province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    guestCount: {
        type: Number,
        required: true
    },
    bedroomCount: {
        type: Number,
        required: true
    },
    bedCount: {
        type: Number,
        required: true
    },
    bathroomCount: {
        type: Number,
        required: true
    },
    amenities: {
        type : Array,
        default : []
    },
    listingPhotoPath: {
        type : Array,
        default : []
    },
    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
},{timestamps: true})
const Listing = mongoose.model('Listing', listingSchema)  //export the model

export default Listing; //export the model
