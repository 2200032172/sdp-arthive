import React from 'react';
import './ArtStore.css';

const ArtStore = () => {
  const artData = [
    { image: 'art1.jpg', description: 'Artwork 1' },
    { image: 'art2.jpg', description: 'Artwork 2' },
    // Add more art pieces as needed
  ];

  const artistData = [
    { image: 'artist1.jpg', description: 'Artist 1' },
    { image: 'artist2.jpg', description: 'Artist 2' },
    // Add more artist cards as needed
  ];

  return (
    <div className="artstore">
      <h1>Art Store</h1>
      <div className="art-cards">
        {artData.map((art, index) => (
          <div key={index} className="art-card">
            <img src={art.image} alt="Artwork" />
            <p>{art.description}</p>
          </div>
        ))}
      </div>
      <h2>Artists</h2>
      <div className="artist-cards">
        {artistData.map((artist, index) => (
          <div key={index} className="artist-card">
            <img src={artist.image} alt="Artist" />
            <p>{artist.description}</p>
          </div>
        ))}
      </div>
      <footer>© 2023 Art Store</footer>
    </div>
  );
};

export default ArtStore;
