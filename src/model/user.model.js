import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    default:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png'
  },
  password: {
    type: String,
    required: true,
  },
  tripList: {
    type: Array,
    default: [],
  },
  wishList: {
    type: Array,
    default: [],
  },
  propertyList: {
    type: Array,
    default: [],
  },
  reservationList: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    eunm: ["Admin", " USER"],
    default: "USER"
  },

},{timestamps:true});

const User = mongoose.model('User' , userSchema);
export default User;  //export the model
