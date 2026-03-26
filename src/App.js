import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import InterviewPrep from "./pages/InterviewPrep";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Recommendation from "./pages/Recommendation";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />

        <Route path="/interview-prep" element={
          <ProtectedRoute><InterviewPrep /></ProtectedRoute>
        } />

        <Route path="/resources" element={
          <ProtectedRoute><Resources /></ProtectedRoute>
        } />

        <Route path="/skills" element={
          <ProtectedRoute><Skills /></ProtectedRoute>
        } />

        <Route path="/recommendation" element={
          <ProtectedRoute><Recommendation /></ProtectedRoute>
        } />

        <Route path="/roadmap" element={
          <ProtectedRoute><Roadmap /></ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;