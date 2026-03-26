import { useState, useEffect } from "react";
import API from "../services/api";
import "../styles/resources.css";

function Resources() {
  const [resources, setResources] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [missingSkills, setMissingSkills] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");
        setMissingSkills(res.data.remainingSkills || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDashboard();
  }, []);

  const handleGetResources = async () => {
    if (missingSkills.length === 0) {
      setError("No missing skills found. Complete your profile first!");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/get-resources", { skills: missingSkills });
      setResources(res.data.resources);
    } catch (err) {
      setError("Failed to suggest resources. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>📚 Learning Resources</h1>
        <p>Curated materials to help you bridge your skill gaps.</p>
      </div>

      {error && <div className="interview-error">{error}</div>}

      <button className="resources-btn" onClick={handleGetResources} disabled={loading}>
        {loading ? "Finding Resources..." : "🔍 Find Learning Materials"}
      </button>

      {resources ? (
        <div className="resources-content">
          <h2>Recommended Materials</h2>
          <pre className="resources-text">{resources}</pre>
        </div>
      ) : (
        !loading && (
          <div className="resources-empty">
            <div className="empty-icon">📖</div>
            <p>Click the button above to get AI-suggested courses, books, and docs for your missing skills.</p>
          </div>
        )
      )}
    </div>
  );
}

export default Resources;
