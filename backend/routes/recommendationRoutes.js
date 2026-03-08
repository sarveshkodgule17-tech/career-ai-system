const express = require("express");
const router = express.Router();

const { recommendCareer } = require("../controllers/recommendationController");

router.post("/recommend-career", recommendCareer);

module.exports = router;