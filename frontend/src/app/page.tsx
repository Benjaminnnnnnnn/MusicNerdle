"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  CreateGame,
  JoinGame,
  UserProfile,
  AddFriend,
  Login,
  CreateAccount,
} from "./pages"; // Import from ./pages/index.js

function App() {
  // Check if the user is logged in by looking at localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* If user is logged in, render the main page, otherwise render login page */}
        <Route path="/" element={isLoggedIn ? <MainPage /> : <Login />} />
        <Route
          path="/create-game"
          element={isLoggedIn ? <CreateGame /> : <Login />}
        />
        <Route
          path="/join-game"
          element={isLoggedIn ? <JoinGame /> : <Login />}
        />
        <Route
          path="/user-profile"
          element={isLoggedIn ? <UserProfile /> : <Login />}
        />
        <Route
          path="/add-friend"
          element={isLoggedIn ? <AddFriend /> : <Login />}
        />
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
