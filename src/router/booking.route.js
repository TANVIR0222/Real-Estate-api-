import express from "express";
import { addBooking, fovoritBooking, fovoriteBooking } from "../controller/booking.controller.js";


const bookingRoute = express.Router();
bookingRoute.post('/create' , addBooking )
bookingRoute.get('/favorite-booking/:id' , fovoriteBooking )
bookingRoute.delete('/favorite-user/:id' , fovoritBooking )
export default bookingRoute;  // export the router to use in other files