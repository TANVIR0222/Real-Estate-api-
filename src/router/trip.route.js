const express = require('express');
const {addTripList, getTripList} = require('../controller/trip.controller');

const tripListRoute = express.Router();

tripListRoute.post('/trip-list' , addTripList)
tripListRoute.get('/all-trip-list/:id' , getTripList)
module.exports = tripListRoute;  //exporting the router to use in other files.