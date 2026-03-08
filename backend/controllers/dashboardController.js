const Progress = require("../models/Progress");
const Role = require("../models/Role");
const User = require("../models/UserModel");

exports.getDashboard = async (req, res) => {

  try {

    const userId = req.user.id;

    const user = await User.findById(userId);

    const progress = await Progress.findOne({ userId });

    const role = await Role.findOne({ roleName: user.targetRole });

    let remainingSkills = [];

    if (role && progress) {

      const completed = progress.completedSkills;

      const required = role.requiredSkills.map(s => s.skill);

      remainingSkills = required.filter(skill =>
        !completed.includes(skill)
      );

    }

    res.json({
      targetRole: user.targetRole,
      completedSkills: progress ? progress.completedSkills : [],
      remainingSkills,
      progressPercentage: progress ? progress.progressPercentage : 0
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};