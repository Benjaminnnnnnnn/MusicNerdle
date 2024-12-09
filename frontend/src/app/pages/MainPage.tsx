import React from "react";
import { Link } from "react-router-dom"; // For navigation

function MainPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Music Nerdle</h1>
      <div>
        <Link to="/create-game">
          <button style={buttonStyle}>Create Game</button>
        </Link>
      </div>
      <div>
        <Link to="/join-game">
          <button style={buttonStyle}>Join Game</button>
        </Link>
      </div>
      <div>
        <Link to="/user-profile">
          <button style={buttonStyle}>User Profile</button>
        </Link>
      </div>
      <div>
        <Link to="/add-friend">
          <button style={buttonStyle}>Add Friend</button>
        </Link>
      </div>
    </div>
  );
}

// Styling for the buttons
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

export default MainPage;
