import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <header className="about-header">
          <h1>About AI Career Guide</h1>
          <p>Navigating your professional future with confidence.</p>
        </header>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            The AI Career Guide was built to solve the overwhelm people face in today's 
            rapidly changing job market. We empower individuals by providing data-driven 
            career recommendations and personalized learning paths to bridge the gap 
            between current skills and professional dreams.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            Our intelligent algorithms analyze your existing skill set and compare it 
            against thousands of industry roles. We don't just tell you what career is a 
            good fit; we provide the exact roadmap you need to get there, including 
            specific technical and soft skills to master.
          </p>
        </section>

        <div className="core-values">
          <div className="value-item">
            <span className="value-icon">🤖</span>
            <h3>AI-Powered</h3>
            <p>Smart, adaptive guidance customized for you.</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🎓</span>
            <h3>Learning-First</h3>
            <p>Focused on bridging the specific skill gaps.</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🔒</span>
            <h3>Data Privacy</h3>
            <p>Your data is protected and used only for guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
