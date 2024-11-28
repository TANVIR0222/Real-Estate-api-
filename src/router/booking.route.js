const express = require('express');
const { addBooking } = require('../controller/booking.controller');

const bookingRoute = express.Router();
bookingRoute.post('/create' , addBooking )
module.exports = bookingRoute;  //export the router to use in other files