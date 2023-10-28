import './Register.css';
import React, { useState } from 'react';
import img from './img.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/register`, {
        method: 'POST',
        body: JSON.stringify({ username, phonenumber, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Registration successful, navigate to the Home page
        navigate('/frontpage');
      } else if (response.status === 409) {
        // User already exists, show an alert
        alert('User already exists');
      } else {
        // Handle other registration errors (e.g., show a generic error message)
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle the registration error (e.g., show a generic error message)
      alert('Registration failed');
    }

    // Clear the form fields
    setUsername('');
    setPhonenumber('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="page-background">
      <div className="vertical-container">
        <div className="left-side">
          <img src={img} alt="Logo" className="logo" />
        </div>
        <div className="right-side">
          <div className="top-right-links">
            <a href="/about" className="navbar-link">
              About Us
            </a>
            <span className="navbar-separator"></span>
            <a href="/faqs" className="navbar-link">
              FAQs
            </a>
            <span className="navbar-separator"></span>
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </div>
          <div className="s">
            <h2>Register here to dive into Hive</h2>
          </div>
          <div className="signup">
            <form onSubmit={handleSubmit}>
              <br />
              <label>
                Username:
                <br />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Phone Number:
                <br />
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter your Phonenumber"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </label>
              <label>
                Email:
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <span>Password:</span>
                <br />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="show-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🔓' : '🔒'}
                </span>
              </label>
              <a href="/forgotpassword">Forgot Password?</a>
              <br />
              <div className="l">
                <button type="submit" className="register-button">
                  Register
                </button>
                </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Register;
