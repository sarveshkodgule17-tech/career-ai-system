import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/recommendation.css";

function Recommendation() {
  const [careers, setCareers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recommendedCareers"));
    if (stored) setCareers(stored);
  }, []);

  const selectCareer = (career) => {
    localStorage.setItem("selectedCareer", career);
    navigate("/roadmap");
  };

  if (careers.length === 0) {
    return (
      <div className="recommendation-page">
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h2>No recommendations yet</h2>
          <p>Go to the Skills page and enter your skills to get personalized career suggestions.</p>
          <Link to="/skills" className="back-btn">Enter Your Skills →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendation-page">

      <h1>🌟 Recommended Careers</h1>
      <p className="subtitle">
        Based on your skills, here are the best career matches for you. Select one to generate a personalized roadmap.
      </p>

      <div className="career-list">
        {careers.map((career, index) => (
          <div className="career-card" key={index} onClick={() => selectCareer(career)}>
            <div className="career-left">
              <div className="career-number">{index + 1}</div>
              <div>
                <div className="career-name">{career}</div>
                <div className="career-sub">Click to view learning roadmap</div>
              </div>
            </div>
            <button className="career-btn" onClick={(e) => { e.stopPropagation(); selectCareer(career); }}>
              View Roadmap →
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Recommendation;