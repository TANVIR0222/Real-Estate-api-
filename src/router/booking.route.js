import express from "express";
import { addBooking, fovoriteBooking } from "../controller/booking.controller.js";


const bookingRoute = express.Router();
bookingRoute.post('/create' , addBooking )
bookingRoute.get('/favorite-booking/:id' , fovoriteBooking )
export default bookingRoute;  // export the router to use in other files