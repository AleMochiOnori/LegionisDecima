import type React from 'react';
import "./CombatCard.css"

interface CardProps {
  image: string;
  title: string;
  subtitle : string
  text: string;

}

const CombatCard: React.FC<CardProps> = ({ image, title, subtitle, text }) => {
  return (
    <div className="combat-card">
      <div className="card-image-container">
        <img className="combat-image" src={image} alt={title} />
        <div className="image-overlay"></div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className='sottoTitolo'>{subtitle}</p>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default CombatCard;