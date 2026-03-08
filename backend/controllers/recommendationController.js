const Role = require("../models/Role");

exports.recommendCareer = async (req, res) => {
  try {

    const { skills } = req.body;

    const roles = await Role.find();

    let recommendations = [];

    roles.forEach(role => {

      const requiredSkills = role.requiredSkills.map(s => s.skill);

      const match = skills.filter(skill =>
        requiredSkills.includes(skill)
      );

      if (match.length >= 2) {
        recommendations.push(role.roleName);
      }

    });

    res.json({
      recommendedCareers: recommendations
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};