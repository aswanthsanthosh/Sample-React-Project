import React, { useState } from 'react';
import banner from '../assets/text.svg';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status
  const [focusedField, setFocusedField] = useState(null);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address.');
    } else {
        setEmailError(''); // Clear error if the email is valid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    if (emailError) {
      setLoading(false);
      return; // Don't submit if there's an email format error
  }

    try {
      const response = await axios.post('http://localhost:8000/login/', {
          email: email,
          password: password
      });
  
      console.log("Response received:", response.status);
  
      // Check for specific error in response data or invalid status code
          toast.success('Login successful');
          setError(false); // Reset error state on successful login
          navigate('/dashboard'); // Navigate to dashboard
  
  } catch (error) {
      // console.error('Login failed:', error.response.data.error);
  
      // Show error message in case of network or other exceptions
      if (error.response && error.response.data && error.response.data.error === "Invalid credentials"){
      toast.error('メールアドレスかパスワードに誤りがあります',
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          style: { width: '450px', height: '55px', borderRadius: '25' },
          closeButton: false, 
          }
      );
      setError(true); // Trigger error state for form
  } else if (error.response && error.response.data && error.response.data.error === "suspended user") {

  }else {
    toast.error('お使いのアカウントは現在アクセスできません。ログインするには担当の管理者までお知らせください。',
      {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { width: '450px', height: '55px', borderRadius: '25' },
        closeButton: false, 
        }
    );
    setError(false); // Trigger error state for form
  }
}
  }  


  const handleFocus = (field) => {
    setFocusedField(field);
  };

  // Handle blur event to reset the border color
  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className='login'>
        <img src={banner} alt="Logo" className="login-image" />
        <hr className='custom-horizontal'/>
        <div className="login-container">
      <h2 className='login-header'>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <label>メールアドレス:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={
              error ? 'input-error' : focusedField === 'email' ? 'input-focused' : 'input-normal'
            }
        //   style={{
        //     borderColor: error ? 'red' : '', // Conditionally apply red border
        //     borderWidth: error ? '' : '',
        //   }}
          required
        />
        {emailError && <p className="error-message" style={{ color: 'red' }}>{emailError}</p>}
        <label>パスワード:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
            className={
              error ? 'input-error' : focusedField === 'password' ? 'input-focused' : 'input-normal'
            }
        //   style={{
        //     borderColor: error ? 'red' : '', // Conditionally apply red border
        //     borderWidth: error ? '' : '',
        //   }}
          required
        />
        <button type="submit">ログイン</button>
        <a className='forgot-pw' href='forgot-pw'>パスワードをお忘れの場合</a>
      </form>
      <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
    </div>
  );
};

export default Login;
