const express = require("express");
const router = express.Router();
const { analyzeSkillGap } = require("../controllers/skillController");

router.post("/skill-gap", analyzeSkillGap);

module.exports = router;