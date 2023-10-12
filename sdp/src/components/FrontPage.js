import React from 'react';
import './FrontPage.css';
import logo from './logo.png';

const FrontPage = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="hero">
                <h1>Welcome to Arthive!</h1>
                <p>Your platform for exploring amazing artworks.</p>
            </div>

            <div className="card-container">
                {/* Display your cards here */}
                {/* Sample Card */}
                <div className="card">Artwork 1</div>
                <div className="card">Artwork 2</div>
                <div className="card">Artwork 3</div>
                <div className="card">Artwork 4</div>
                <div className="card">Artwork 5</div>
                <div className="card">Artwork 6</div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
};

export default FrontPage;
