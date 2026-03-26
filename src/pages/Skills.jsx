import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/skills.css";

const EXAMPLE_SKILLS = [
  "Python", "SQL", "Machine Learning", "JavaScript", "React",
  "Node.js", "Statistics", "Data Analysis", "Excel", "Tableau"
];

function Skills() {
  const [skills, setSkills] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    if (!skills.trim()) {
      setError("Please enter at least one skill.");
      return;
    }
    setLoading(true);
    try {
      const skillArray = skills.split(",").map(s => s.trim()).filter(Boolean);
      const res = await API.post("/recommend-career", { skills: skillArray });
      localStorage.setItem("recommendedCareers", JSON.stringify(res.data.recommendedCareers));
      navigate("/recommendation");
    } catch (err) {
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addExampleSkill = (skill) => {
    setSkills(prev => {
      const existing = prev.split(",").map(s => s.trim()).filter(Boolean);
      if (existing.includes(skill)) return prev;
      return existing.length === 0 ? skill : prev + ", " + skill;
    });
  };

  return (
    <div className="skills-page">
      <div className="skills-card">

        <h1>🎯 Discover Your Career Path</h1>
        <p>
          Enter your skills below separated by commas, and we'll recommend the best career paths for you based on your current strengths.
        </p>

        <div className="skills-input-row">
          <input
            className="skills-input"
            placeholder="e.g. Python, SQL, Machine Learning"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="skills-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Analyzing..." : "Find Careers →"}
          </button>
        </div>

        <div className="skills-hint">
          Separate multiple skills with commas. The more skills you add, the better the match.
        </div>

        {error && <div className="skills-error">{error}</div>}

        <div className="example-skills">
          <h3>Click to add popular skills</h3>
          <div className="example-tags">
            {EXAMPLE_SKILLS.map(skill => (
              <span
                key={skill}
                className="example-tag"
                onClick={() => addExampleSkill(skill)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;