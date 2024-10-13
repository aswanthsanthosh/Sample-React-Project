import React, { useEffect } from 'react';
import logo from '../assets/Launcher.png';
import Login from './Login';

const SplashScreen = ({ onTimeout }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onTimeout(); // Call the onTimeout function after 3 seconds
      }, 3000);
  
      return () => clearTimeout(timer); // Cleanup the timeout on unmount
    }, [onTimeout]);
  
    return (
      <div className="splash-screen">
        <img src={logo} alt="App Logo" className="splash-logo" />
      </div>
    );
  };

export default SplashScreen;