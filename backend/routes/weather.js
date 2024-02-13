import express from "express";

// Create a new express router
const weatherRoute = express.Router();

// GET request using a city to localhost:4000/weather/:city
weatherRoute.get("/:city", (req, res) => {
  res.send(`The weather in ${req.params.city} is 25 degrees`);
});

// GET request using longitude and latitude to localhost:4000/weather/:lon/:lan
weatherRoute.get("/:lon/:lan", (req, res) => {
  res.send(`The weather at ${req.params.lon}, ${req.params.lan} is 25 degrees`);
});

export default weatherRoute;
