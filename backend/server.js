const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Import Routes
const roleRoutes = require("./routes/roleRoutes");
const skillRoutes = require("./routes/skillRoutes");
const progressRoutes = require("./routes/progressRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const authRoutes = require("./routes/authRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const profileRoutes = require("./routes/profileRoutes");
const dashboradRoutes = require("./routes/dashboardRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", roleRoutes);
app.use("/api", skillRoutes);
app.use("/api", progressRoutes);
app.use("/api", roadmapRoutes);
app.use("/api", authRoutes);
app.use("/api", recommendationRoutes);
app.use("/api", profileRoutes);
app.use("/api", dashboradRoutes);

app.get("/", (req, res) => {
  res.send("AI Career Guidance API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});