import React, { useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [tempScale, setTempScale] = useState("Farenheit");

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

  const farenheitToCelsius = (farenheit) => {
    const celsius = ((farenheit - 32) * 5) / 9;
    return celsius.toFixed(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(city, tempScale);
    fetchWeatherData();
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 class="mb-4 pb-2 fw-normal" style={{ color: "white" }}>
              Check the weather forecast
            </h3>

            {/* Search bar */}
            <div class="input-group rounded mb-3">
              <form
                onSubmit={handleSubmit}
                className="input-group rounded mb-3"
              >
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="City"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button
                  type="submit"
                  className="input-group-text border-0 fw-bold"
                >
                  <span
                    className="input-group-text border-0 fw-bold"
                    id="search-addon"
                  >
                    Check!
                  </span>
                </button>
              </form>
            </div>

            {/* Radio buttons */}
            <div class="mb-4 pb-2" style={{ color: "white" }}>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Farenheit"
                  checked
                  onClick={(e) => setTempScale(e.target.value)}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Farenheit
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="Celsius"
                  onClick={(e) => setTempScale(e.target.value)}
                />
                <label class="form-check-label" for="inlineRadio2">
                  Celsius
                </label>
              </div>
            </div>

            {/* Weather info */}
            {weatherData && (
              <div class="card shadow-0 border">
                <div class="card-body p-4">
                  <h4 class="mb-1 sfw-normal">
                    {weatherData.name}, {weatherData.sys.name}
                  </h4>
                  <p class="mb-2">
                    Current temperature:{" "}
                    <strong>
                      {tempScale === "Farenheit"
                        ? weatherData.main.temp + "°F"
                        : farenheitToCelsius(weatherData.main.temp) + "°C"}
                    </strong>
                  </p>
                  <p>
                    Feels like:{" "}
                    <strong>
                      {tempScale === "Farenheit"
                        ? weatherData.main.feels_like + "°F"
                        : farenheitToCelsius(weatherData.main.feels_like) +
                          "°C"}
                    </strong>
                  </p>
                  <p>
                    Max:{" "}
                    <strong>
                      {tempScale === "Farenheit"
                        ? weatherData.main.temp_max + "°F"
                        : farenheitToCelsius(weatherData.main.temp_max) + "°C"}
                    </strong>
                    , Min:{" "}
                    <strong>
                      {tempScale === "Farenheit"
                        ? weatherData.main.temp_min + "°F"
                        : farenheitToCelsius(weatherData.main.temp_min) + "°C"}
                    </strong>
                  </p>

                  <div class="d-flex flex-row align-items-center">
                    <p class="mb-0 me-4">
                      {weatherData.weather[0].description}
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      alt="Weather icon"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    // <div className="weather-card">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Enter city name"
    //       value={city}
    //       onChange={(e) => setCity(e.target.value)}
    //     />
    //     <button type="submit">Search</button>
    //   </form>
    //   {weatherData && (
    //     <div className="weather-info">
    // <img
    //   src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
    //   alt="Weather icon"
    // />
    //       <h3>
    //         {weatherData.name}, {weatherData.sys.country}
    //       </h3>
    //       <p>{weatherData.weather[0].main}</p>
    //       <p>Temperature: {weatherData.main.temp}°C</p>
    //       <p>Feels like: {weatherData.main.feels_like}°C</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default WeatherCard;
