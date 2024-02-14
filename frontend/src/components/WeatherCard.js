import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`/weather/${city}`);
      if (response.data.cod === 200) {
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div className="weather-info">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <p>{weatherData.weather[0].main}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
