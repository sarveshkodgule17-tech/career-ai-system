import { useState } from "react";
import API from "../services/api";
import "../styles/interview.css";

function InterviewPrep() {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const roleName = localStorage.getItem("selectedCareer") || "your target role";

  const handleGenerate = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/generate-interview", { roleName });
      setQuestions(res.data.questions);
    } catch (err) {
      setError("Failed to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="interview-page">
      <div className="interview-header">
        <h1>🎙️ AI Interview Preparation</h1>
        <p>Get ready for your next big opportunity as a <strong>{roleName}</strong>.</p>
      </div>

      {error && <div className="interview-error">{error}</div>}

      <button className="interview-btn" onClick={handleGenerate} disabled={loading}>
        {loading ? "Preparing Questions..." : "✨ Generate Mock Questions"}
      </button>

      {questions ? (
        <div className="interview-content">
          <h2>Mock Interview Questions & Tips</h2>
          <pre className="interview-text">{questions}</pre>
        </div>
      ) : (
        !loading && (
          <div className="interview-empty">
            <div className="empty-icon">🤝</div>
            <p>Click the button above to generate AI-powered interview questions and best answers.</p>
          </div>
        )
      )}
    </div>
  );
}

export default InterviewPrep;
