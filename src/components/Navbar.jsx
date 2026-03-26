import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const location = useLocation();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className="navbar-logo-icon">🚀</div>
        <span className="navbar-title">AI Career Guide</span>
      </Link>

      <div className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>

        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/recommendation">Careers</Link>
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/interview-prep">Interview</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-btn">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/register" className="btn-primary-nav" style={{ 
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              padding: "8px 16px",
              borderRadius: "8px",
              color: "white"
            }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;