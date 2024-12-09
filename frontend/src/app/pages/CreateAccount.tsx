import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../requests/requests";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserUpload = () => {
    createUser(email, username, password);
    navigate("/");
    return "Test";
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Create Account</h1>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
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
        <button onClick={handleUserUpload} style={buttonStyle}>
          Create Account
        </button>
      </div>
    </div>
  );
};
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

export default CreateAccount;
