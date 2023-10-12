//Home.js
import React, { useState } from 'react';
import './App.css'; // You can create this CSS file to style your page
import img from './img.png';
import { Link } from 'react-router-dom';
const Home = () => {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation logic here

    // Example: Check if required fields are not empty
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Example: Send data to server or perform signup logic
    console.log('User Signed Up!', formData);
    // You can add further logic here, like making an API call to register the user
  };

  return (
    <div className="class">
      <div className="left-side">
        <img src={img} alt="Logo" className="logo" />
      </div>
      <div className="right-side">
      <div className="top-right-links">
        <a href="/about" className="navbar-link">About Us</a>
        <span className="navbar-separator"></span>
        <a href="/faqs" className="navbar-link">FAQs</a>
        <span className="navbar-separator"></span>
        <a href="/contact" className="navbar-link">Contact</a>
      </div>
        <div className='s'>
          <h2>  Sign-In here to Enter the Hive </h2>
        </div>
       <div className='signup'>
        <form onSubmit={handleSubmit}>
         
          <br />

          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
     

          <label>
      <span>Password:</span>
      <br />
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      <span
        style={{ cursor: 'pointer', marginLeft: '25%' }}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? '🔓' : '🔒'}
      </span>
    </label>
          <a href="/forgotpassowrd">Forgot Password?</a>
          <br/>
          <div className='l'>
  <Link to='/frontpage' className='button-link'>Login</Link>
</div>

        </form>
        <br />
        <p3>
            New here? <a href="/register">Register now</a>
          </p3>
        </div>
       
      </div>
    </div>
  );
};

export default Home;