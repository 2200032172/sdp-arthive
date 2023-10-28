//Home.js
import React, { useState } from 'react';
import './App.css'; // You can create this CSS file to style your page
import img from './img.png';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    let result = await fetch(
      `http://localhost:5000/login`, {
        method: "post",
        body: JSON.stringify({
          email, password
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    )

    result = await result.json();
    console.warn(result);
    if(result){
      setEmail("");
      setPassword("");
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  
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
          <h2>  Sign-In to dive into Hive </h2>
        </div>
        <div className='signin'>
          <form action="POST" onSubmit={handleSubmit}>

            <br />

            <label>
              Email:
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </label>


            <label>
              <span>Password:</span>
              <br />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <span
                style={{ cursor: 'pointer', marginLeft: '25%' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🔓' : '🔒'}
              </span>
            </label>
            <a href="/forgotpassowrd">Forgot Password?</a>
            <br />
            <Link to="/frontpage" className='button-link'>
        Submit
      </Link>

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