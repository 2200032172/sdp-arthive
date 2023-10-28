import React from 'react';
import './FrontPage.css';
import logo from './logo.png';
import image from './image.jpg';
import pic1 from './pic1.jpeg';
import pic2 from './pic2.jpeg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpeg';
import pic5 from './pic5.jpeg';
import pic6 from './pic6.jpg';


const FrontPage = () => {
    // Array of sample data for the cards
    const cardData = [
        {
            imageUrl: require('./pic1.jpeg'),
            description: 'Beyond the thoughts ArtWork by Anoop Mohan',
        },
        {
            imageUrl: require('./pic2.jpeg'),
            description: 'Untitled ArtWork by Anoop Mohan',
        },
        {
            imageUrl: require('./pic3.jpg'),
            description: '“The retreat” Artwork by Ajaya Kumar',
        },
        {
            imageUrl: require('./pic4.jpeg'),
            description: '“Glowing in the dawn” Artwork by Ulla Kuronen',
        },
        {
            imageUrl: require('./pic5.jpeg'),
            description: '“Indian bison” Artwork by Nandan P.V',
        },
        {
            imageUrl: require('./pic6.jpg'),
            description: '” If you cannot be good, be careful” Artwork by Teppo Valkama',
        },
        // Add more objects for additional cards
    ];
    const shuffledImages = [...image].sort(() => Math.random() - 0.5);

    const cardImage = shuffledImages.map((imageUrl, index) => ({
        imageUrl,
        description: `Artwork ${index + 1}`,
    }));

    // Function to generate a random number between 0 and the length of cardData
    const getRandomCardIndex = () => {
        return Math.floor(Math.random() * cardData.length);
    };

    // Generate random card sizes
    const getRandomCardSize = () => {
        const sizes = ['medium'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', // Adjust the number of columns as needed
        gap: '10px',
        padding: '20px',
    };

    return (
        <div>
            <nav className="navbar">
                <div className="left-section">
                    <ul className="nav-links">
                        <li>ArtGallery</li>
                        <li>ArtStore</li>
                    </ul>
                </div>
                <div className="center-section">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="hero-container">
                <img src={image} alt="Hero" className="hero-image" />
                <div className="hero-text">
                    <h1>Welcome to Arthive!</h1>
                    <p>Your platform for exploring amazing artworks.</p>
                </div>

                <div style={cardContainerStyle} className="card-container">
                    {/* Generate random cards with varying sizes and positions */}
                    {Array.from({ length: 15 }).map((_, index) => {
                        const randomIndex = getRandomCardIndex();
                        const card = cardData[randomIndex];
                        const cardSize = getRandomCardSize();
                        const style = {
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            padding: '10px',
                            textAlign: 'center',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        };
                        // Add size-specific styles
                        if (cardSize === 'small') {
                            style.width = '100px';
                            style.height = '150px';
                        } else if (cardSize === 'medium') {
                            style.width = '150px';
                            style.height = '200px';
                        } else if (cardSize === 'large') {
                            style.width = '200px';
                            style.height = '250px';
                        }

                        return (
                            <div key={index} className="card" style={style}>
                                <img src={card.imageUrl} alt={`Artwork ${index + 1}`} />
                                <p>{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
