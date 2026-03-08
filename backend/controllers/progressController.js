const Progress = require("../models/Progress");

exports.updateProgress = async (req, res) => {
  try {

    const { userId, roleName, completedSkills, totalSkills } = req.body;

    const progressPercentage = Math.round(
      (completedSkills.length / totalSkills) * 100
    );

    const progress = await Progress.create({
      userId,
      roleName,
      completedSkills,
      totalSkills,
      progressPercentage
    });

    res.json(progress);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};