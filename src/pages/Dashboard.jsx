import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");
        setData(res.data);
      } catch (err) {
        setError("Failed to load dashboard. Please try again.");
        console.error(err);
      }
    };
    fetchDashboard();
  }, []);

  if (error) {
    return (
      <div className="loading-state">
        <span style={{ color: "#f87171" }}>{error}</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <span>Loading your dashboard...</span>
      </div>
    );
  }

  return (
    <div className="page-wrapper">

      <div className="page-header">
        <h1>Welcome back 👋</h1>
        <p>Here's your career progress overview</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-label">Target Role</div>
          <div className="stat-value" style={{ fontSize: "18px" }}>
            {data.targetRole || "Not set"}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-label">Completed Skills</div>
          <div className="stat-value">{data.completedSkills.length}</div>
          <div className="stat-sub">skills mastered</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-label">Remaining Skills</div>
          <div className="stat-value">{data.remainingSkills.length}</div>
          <div className="stat-sub">skills to learn</div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Overall Progress</h2>
        <div className="progress-label">
          <span>Career Readiness</span>
          <span>{data.progressPercentage}%</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${data.progressPercentage}%` }}
          />
        </div>
      </div>

      {data.remainingSkills.length > 0 && (
        <div className="skills-section">
          <h2>Skills to Learn</h2>
          <div className="skill-tags">
            {data.remainingSkills.map((skill, i) => (
              <span className="skill-tag" key={i}>{skill}</span>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;