const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  userId: String,
  roleName: String,
  completedSkills: [String],
  totalSkills: Number,
  progressPercentage: Number
});

module.exports = mongoose.model("Progress", ProgressSchema);