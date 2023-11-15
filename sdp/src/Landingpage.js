import React from 'react';
import React, { useState } from 'react';
import './Landingpage.css'; // Import the CSS file
import img from './img.png';

const Landingpage = () => {
    return (
        <div className="Landingpage">
            <nav className="navbar">
                <div className="logo">Your Logo</div>
                <div className="left-side">
        <img src={img} alt="Logo" className="logo" />
      </div>
                <ul className="nav-links">
                    <li><a href="#">Signup</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </nav>
            <div className="content">
                <h1>Welcome to our Arts World</h1>
                <p>Explore the beauty of art and creativity on our platform.</p>
            </div>
        </div>
    );
};

export default Landingpage;
