import express from "express";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Import the weatherRoute from the weather.js file
import weatherRoute from "./routes/weather.js";

// Create an express app
const app = express();

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Use the weatherRoute for all requests to localhost:4000/weather
app.use("/weather", weatherRoute);

// Listen on localhost:4000
app.listen(4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
