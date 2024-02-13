import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create an express app
const app = express();

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Listen on port 4000
app.listen(4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
