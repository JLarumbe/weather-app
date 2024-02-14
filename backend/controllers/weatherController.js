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
      "X-RapidAPI-Key": "5b038c2ea5msha840abea9707284p163721jsnca2de98cbef7",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherByCity, getWeatherByLonLat };
