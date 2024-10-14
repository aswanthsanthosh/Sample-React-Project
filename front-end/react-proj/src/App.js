import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ForgotPW from "./components/ForgotPW";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./components/userPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let token = null;

  const handleTimeout = () => {
    setShowSplash(false); // Hide the splash screen after 3 seconds
    token = localStorage.getItem("accessToken");
    console.log("token is :", token);
  };


  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Splash screen route */}
          <Route
            path="/"
            element={
              showSplash ? (
                <SplashScreen onTimeout={handleTimeout} />
              ) : token ? (
                <Dashboard />
              ) : (
                <Login />
              )
            }
          />

          {/* Route to the dashboard (for logged-in users) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="forgot-pw" element={<ForgotPW />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;