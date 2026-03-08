const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.generateRoadmap = async (req, res) => {
  try {

    const { roleName, missingSkills } = req.body;

    const prompt = `
Create a structured learning roadmap for becoming a ${roleName}.
The user is missing these skills: ${missingSkills.join(", ")}.

Divide the roadmap into phases with clear learning steps.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    res.json({
      role: roleName,
      roadmap: response.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};