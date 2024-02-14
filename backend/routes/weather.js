import express from "express";
import {
  getWeatherByCity,
  getWeatherByLonLat,
  getFiveDayForecastByLatLon,
} from "../controllers/weatherController.js";

// Create a new express router
const weatherRoute = express.Router();

// GET request using a city to localhost:4000/weather/[city]
weatherRoute.get("/:city", getWeatherByCity);

// GET request using longitude and latitude to localhost:4000/weather/[lon]/[lan]
weatherRoute.get("/:lon/:lat", getWeatherByLonLat);

// GET request using longitude and latitude to localhost:4000/weather/fivedaysforcast/[lon]/[lan]
weatherRoute.get("/fivedaysforcast/:lat/:lon", getFiveDayForecastByLatLon);

export default weatherRoute;
