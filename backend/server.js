const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Import Routes
const roleRoutes = require("./routes/roleRoutes");
const skillRoutes = require("./routes/skillRoutes");

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", roleRoutes);
app.use("/api", skillRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("AI Career Guidance API Running");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});