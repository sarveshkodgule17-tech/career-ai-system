const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  stream: String,
  targetRole: String,
  skills: [String]
});

module.exports = mongoose.model("User", UserSchema);