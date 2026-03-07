const express = require("express");
const router = express.Router();
const Role = require("../models/Role");

router.get("/roles/:stream", async (req, res) => {
  try {
    const roles = await Role.find({ stream: req.params.stream });
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;