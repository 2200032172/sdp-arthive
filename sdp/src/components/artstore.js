import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './ArtStore.css'; // Make sure to import your CSS file
import './pay';

import image11 from './image 11.jpeg.jpg';
import image12 from './image 12.jpeg.jpg';
import image13 from './image 13.jpeg.jpg';
import image14 from './image 14.jpeg.jpg';
import image15 from './image 15.jpeg.jpg';
import image16 from './image 16.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      </div>
    </nav>
  );
};

const ArtStore = () => {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      image: image11,
      description: 'Beautiful Landscape Painting',
      price: '₹20,00,000',
    },
    {
      id: 2,
      image: image12,
      description: 'Abstract Art in Blue Tones',
      price: '₹15,00,000',
    },
    {
      id: 3,
      image: image13,
      description: 'Contemporary Sculpture',
      price: '₹35,00,000',
    },
    {
      id: 4,
      image: image14,
      description: 'Constructivism Art',
      price: '₹25,00,000',
    },
    {
      id: 5,
      image: image15,
      description: 'Post-Impressionism',
      price: '₹65,00,000',
    },
    {
      id: 6,
      image: image16,
      description: 'Neoclassicism',
      price: '₹85,00,000',
    },
    // Add more artworks as needed
  ]);

  return (
    <div>
      <Navbar />
      <div className="art-store">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img src={artwork.image} alt={`Artwork ${artwork.id}`} />
            <div className="artwork-description">
              <h3>{artwork.description}</h3>
              <p>{artwork.price}</p>
              <Link to="/pay">
                <button className="buy-now-button" >Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtStore;
