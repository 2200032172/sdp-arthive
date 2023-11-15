import React , { useState } from 'react'; // Import React and useState
import './artmagazine.css'; // Import your CSS file
import art1 from './art1.png';
import art2 from './art2.jpg';
import art3 from './art3.jpg';
import art4 from './art4.jpg';
import art5 from './art5.jpg';
import art6 from './art6.jpg';

const ArtMagazine = () => {
  const [cards, setCards] = useState([
    { id: 1, image: art1, description: 'An Ode to Abstract – By Artist Aaron Kuriakose. One interesting art that discusses the usage of different shades of acrylic including blues and greens, captures the natural scenery “An Ode to Abstract”. The use of acrylics in this nature-based abstract art is done by Aaron Kuriakose.' },
    { id: 2, image: art2, description: 'Artists Who Inspire: Examining the Life and Work of Frida Kahlo. Frida Kahlo, a renowned Mexican artist, remains an iconic figure in the art world. Her life and work continue to inspire generations of artists and art enthusiasts around the globe.' },
    { id: 3, image: art3, description: 'There are different forms of art, among these, one is contemporary art. Now you must be wondering what’s this contemporary art form? In a simple sense, the term contemporary art refers to any modern art i.e. painting, sculpture, photography, installation, performance, and video art that is produced today.' },
    { id: 4, image: art4, description: 'Lokame Tharavadu (The World Is One Family) Art Exhibition held in Alleppey. Alappuzha called Alleppey kicked off one of the biggest events in Kerala Lokame Tharavadu (The World Is One Family) a large-scale curated contemporary Art Exhibition involving 260 Malayali artists. The art exhibition was organized by the Kochi Biennale' },
    { id: 5, image: art5, description: 'How to create a certificate of authenticity for your artwork?. It’s still a hot topic whether to include a certificate of authenticity with your artwork or not? These days, being a professional artist is more than just creating quality artworks. A passion that pays doesn’t feel like a job. You need to consider other areas of business like marketing and sales to be on the profitable side of the art market.' },
    { id: 6, image: art6, description: '‘A Tribute To Helen Keller’ Painting which depicts the whole life history of Helen Keller.ArtD’Hope Foundation in association with Palette People conducted a theme-based art activity. We have created a painting tribute to Helen Keller, as she is known to be the advocate of the blind and deaf. We have named this painting “The Advocate – A Tribute to Helen Keller”'},
  ]);
  const handleDescriptionClick = (id) => {
    const updatedCards = cards.map((card) => ({
      ...card,
      showDescription: card.id === id ? !card.showDescription : false,
    }));
    setCards(updatedCards);
  };

return (
  <div>
    <nav className="navbar">
      <span className="art-hive">ART HIVE</span>
    </nav>
    <div className="horizontal-card-container">
      {cards.map((card) => (
        <div key={card.id} className="horizontal-card">
          <img
            src={card.image}
            alt={`Image ${card.id}`}
            onClick={() => handleDescriptionClick(card.id)}
          />
          {card.showDescription && (
            <p>{card.description}</p>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default ArtMagazine;
