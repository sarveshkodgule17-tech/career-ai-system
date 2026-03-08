import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (

    <nav className="navbar">

      <h2 className="navbar-title">AI Career Guide</h2>

      <div className="nav-links">

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/recommendation">Recommendation</Link>
        <Link to="/roadmap">Roadmap</Link>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;