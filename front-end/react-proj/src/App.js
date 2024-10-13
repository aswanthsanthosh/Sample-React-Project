import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPW from './components/ForgotPW';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let token = null

  const handleTimeout = () => {
    setShowSplash(false); // Hide the splash screen after 3 seconds
    token = localStorage.getItem('accessToken');
    console.log("token is :", token)
  };

  const handleLogin = (data) => {
    console.log(data)
    if (data['message'] === "Logged in successfully") {
      setIsLoggedIn(true);
      token = localStorage.getItem('accessToken');
      console.log("token is 2:", token)
    } else {
      alert('Invalid credentials');
    }
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
                <SplashScreen onTimeout={handleTimeout}/>
              ) : token ? (
                <Dashboard />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Route to the dashboard (for logged-in users) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='forgot-pw' element={<ForgotPW />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

