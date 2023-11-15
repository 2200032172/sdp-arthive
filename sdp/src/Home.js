import React, { useState } from 'react';
import './App.css';
import img from './img.png';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch(
        'http://localhost:5000/login', {
        method: "POST",
        body: JSON.stringify({
          email, password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      if (result.ok) {
        localStorage.setItem('email',email);

        navigate('/frontpage');
      } else if (result.status === 400) {
        // User already exists, show an alert
        alert('Incorrect Credentials');
      } else if (result.status === 401) {
        alert('Invalid email, please register !!');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
    setEmail("");
    setPassword("");
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="class">
      <div className="left-side">
        <img src={img} alt="Logo" className="logo" />
      </div>
      <div className="right-side">
        <div className="top-right-links">
          <Link to="/about" className="navbar-link">About Us</Link>
          <span className="navbar-separator"></span>
          <Link to="/faqs" className="navbar-link">FAQs</Link>
          <span className="navbar-separator"></span>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
        <div className='s'>
          <h2>Sign-In to dive into Hive</h2>
        </div>
        <div className='signin'>
          <form onSubmit={handleSubmit}>
            <br />
            <label>
              Email:
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email} // Use value instead of onChange
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </label>
            <label>
              <span>Password:</span>
              <br />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                required
                value={password} // Use value instead of onChange
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <span
                style={{ cursor: 'pointer', marginLeft: '25%' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🔓' : '🔒'}
              </span>
            </label>
            <Link to="/forgotpassword">Forgot Password?</Link> {/* Use Link for navigation */}
            <br />
            <button type="submit" className="register-button">
              Login
            </button>
          </form>
          <br />
          <p>
            New here? <Link to="/register">Register now</Link> {/* Use Link for navigation */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
