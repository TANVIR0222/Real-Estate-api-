import express from "express";
import {addTripList, getTripList}  from "../controller/trip.controller.js";

const tripListRoute = express.Router();

tripListRoute.post('/trip-list' , addTripList)
tripListRoute.get('/all-trip-list/:id' , getTripList)
export default tripListRoute;  //exporting the router to use in other files.