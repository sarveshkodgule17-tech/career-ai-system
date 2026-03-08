import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Recommendation from "./pages/Recommendation";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendation"
          element={
            <ProtectedRoute>
              <Recommendation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <Roadmap />
            </ProtectedRoute>
          }
        />

      </Routes>

    </Router>

  );

}

export default App;