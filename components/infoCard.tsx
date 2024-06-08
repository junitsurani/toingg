import React from 'react';

// Define the interface for Card component props
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

// Card component accepting props defined in CardProps
const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    // Container for the card with styling
    <div className="flex flex-col items-center justify-center p-6 mx-10 my-20 rounded-lg gradient-border h-96 shadow-custom-orange">
      {/* Content wrapper with flexbox styling */}
      <div className="content flex flex-col items-center justify-center p-6">
        {/* Image for the card */}
        <img src={imageSrc} alt={title} className="w-78 h-92 mb-4" />
        {/* Title for the card */}
        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        {/* Description for the card */}
        <p className="text-lg text-center mb-6">{description}</p>
      </div>
    </div>
  );
};

export default Card;
