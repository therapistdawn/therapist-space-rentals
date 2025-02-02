const express = require("express");
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Create a route for the homepage
app.get("/", (req, res) => {
  res.send("Hello, Therapist Space Rentals!");
});

// Export the Express app for Vercel
module.exports = app;
