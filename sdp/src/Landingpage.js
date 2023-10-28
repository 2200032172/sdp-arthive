import React from 'react';
import './Landingpage.css'; // Import your CSS file
import img from './img.png';

function App() {
  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">
        <img src={img} alt="Logo" className="logo" />
        </div>
      </header>

      <main className="content">
        <img src="main-image.jpg" alt="Main Image" className="main-image" />
        <button className="join-button">Join the Network</button>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </div>
  );
}

export default App;
