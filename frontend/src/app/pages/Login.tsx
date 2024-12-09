"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </div>
      <div>
        <button onClick={handleSignup} style={buttonStyle}>
          Create Account
        </button>
      </div>
    </div>
  );
}

// Styling for input fields and buttons
const inputStyle = {
  padding: "10px",
  margin: "10px",
  fontSize: "16px",
  width: "200px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  fontSize: "16px",
  padding: "10px 20px",
  margin: "10px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
};

export default Login;
