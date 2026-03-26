import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <section className="landing-hero">
        <h1>Shape Your Future <br /> with AI Guidance</h1>
        <p>
          Discover the perfect career path based on your skills and get a personalized 
          AI-generated roadmap to achieve your professional goals.
        </p>
        <div className="hero-btns">
          <Link to="/register" className="btn-primary">Get Started Free</Link>
          <Link to="/login" className="btn-secondary">Sign In</Link>
        </div>
      </section>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">🎯</span>
          <h3>Smart Matching</h3>
          <p>Our AI analyzes your unique skill set to recommend the most suitable career roles.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🗺️</span>
          <h3>AI Roadmaps</h3>
          <p>Get a step-by-step learning guide tailored to bridge your specific skill gaps.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📈</span>
          <h3>Progress Tracking</h3>
          <p>Stay motivated by tracking your skills and seeing your career readiness grow.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
