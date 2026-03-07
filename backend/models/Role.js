const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  stream: String,
  roleName: String,
  requiredSkills: [
    {
      skill: String,
      weight: Number
    }
  ]
});

module.exports = mongoose.model("Role", RoleSchema);