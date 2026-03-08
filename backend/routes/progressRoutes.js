const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { updateProgress } = require("../controllers/progressController");

router.post("/progress", authMiddleware, updateProgress);

module.exports = router;