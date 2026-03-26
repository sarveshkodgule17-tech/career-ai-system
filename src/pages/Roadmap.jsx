import { useState } from "react";
import API from "../services/api";
import "../styles/roadmap.css";

function Roadmap() {
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const roleName = localStorage.getItem("selectedCareer") || "your chosen career";

  const generateRoadmap = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/generate-roadmap", {
        roleName,
        missingSkills: ["Machine Learning", "Statistics"]
      });
      // API returns a string from OpenAI, display it directly
      setRoadmap(res.data.roadmap);
    } catch (err) {
      setError("Failed to generate roadmap. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="roadmap-page">

      <div className="roadmap-header">
        <h1>🗺️ Learning Roadmap</h1>
        <div className="roadmap-role">{roleName}</div>
        <p>Generate an AI-powered step-by-step learning plan tailored for you.</p>
      </div>

      {error && <div className="roadmap-error">{error}</div>}

      <button
        className="generate-btn"
        onClick={generateRoadmap}
        disabled={loading}
      >
        {loading ? (
          <>
            <span style={{
              display: "inline-block",
              width: "14px",
              height: "14px",
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: "white",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite"
            }} />
            Generating Roadmap...
          </>
        ) : (
          <>✨ Generate AI Roadmap</>
        )}
      </button>

      {roadmap ? (
        <div className="roadmap-content">
          <h2>Your Personalized Roadmap</h2>
          <pre className="roadmap-text">{roadmap}</pre>
        </div>
      ) : (
        !loading && (
          <div className="roadmap-empty">
            <div className="empty-icon">🤖</div>
            <p>Click the button above to generate your personalized AI learning roadmap.</p>
          </div>
        )
      )}

    </div>
  );
}

export default Roadmap;