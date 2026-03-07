const Role = require("../models/Role");

exports.analyzeSkillGap = async (req, res) => {
  try {
    const { roleName, userSkills } = req.body;

    const role = await Role.findOne({ roleName });

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    let totalWeight = 0;
    let matchedWeight = 0;
    let missingSkills = [];

    role.requiredSkills.forEach((skill) => {
      totalWeight += skill.weight;

      if (userSkills.includes(skill.skill)) {
        matchedWeight += skill.weight;
      } else {
        missingSkills.push(skill.skill);
      }
    });

    const readinessScore = Math.round((matchedWeight / totalWeight) * 100);

    res.json({
      readinessScore,
      missingSkills
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};