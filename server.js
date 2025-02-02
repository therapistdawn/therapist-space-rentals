// Import Express.js
const express = require("express");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Create a route for the homepage
app.get("/", (req, res) => {
  res.send("Hello, Therapist Space Rentals!");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
