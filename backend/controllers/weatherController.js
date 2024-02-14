import axios from "axios";

// Load the environment variables
import dotenv from "dotenv";
dotenv.config();

// Get the weather for a city
const getWeatherByCity = async (req, res) => {
  const { city } = req.params;

  // Set up the request
  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${city}`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  // Make the request
  try {
    // Send the request
    const response = await axios.request(options);
    // Send the response
    res.send(response.data);
  } catch (error) {
    // Send the error
    console.error(error);
  }
};

// Get the weather for a latitude and longitude
const getWeatherByLonLat = async (req, res) => {
  const { lon, lat } = req.params;

  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/latlon/${lon}/${lat}`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getFiveDayForecastByLatLon = async (req, res) => {
  const { lat, lon } = req.params;

  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${lat}/${lon}`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherByCity, getWeatherByLonLat, getFiveDayForecastByLatLon };
