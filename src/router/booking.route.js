const express = require('express');
const { addBooking , fovoriteBooking} = require('../controller/booking.controller');

const bookingRoute = express.Router();
bookingRoute.post('/create' , addBooking )
bookingRoute.get('/favorite-booking/:id' , fovoriteBooking )
module.exports = bookingRoute;  // export the router to use in other files