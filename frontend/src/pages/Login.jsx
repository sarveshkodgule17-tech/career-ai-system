import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await API.post("/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Login failed");

    }

  };

  return (

    <div>

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

    </div>

  );

}

export default Login;