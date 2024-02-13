import express from "express";

// Create a new express router
const weatherRoute = express.Router();

// GET request using a city to localhost:4000/weather/[city]
weatherRoute.get("/:city", (req, res) => {
  // Get the city from the request parameters
  const { city } = req.params;

  // Send a response with the weather in the city
  res.send(`The weather in ${city} is 25 degrees`);
});

// GET request using longitude and latitude to localhost:4000/weather/[lon]/[lan]
weatherRoute.get("/:lon/:lan", (req, res) => {
  // Get the longitude and latitude from the request parameters
  const { lon, lan } = req.params;

  // Send a response with the weather at the longitude and latitude
  res.send(`The weather at ${lon}, ${lan} is 25 degrees`);
});

export default weatherRoute
