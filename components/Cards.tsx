import React from 'react';

// Define the props interface
interface CardProps {
  imageSrc: string;       // Image source URL
  title: string;          // Card title
  description: string;    // Card description
  buttonText: string;     // Button text
}

// Define the Card component
const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText }) => {
  return (
    // Card container with flex layout and styling
    <div className="flex flex-col items-center justify-center p-6 mx-10 mt-20 border border-orange-300 rounded-lg shadow-md">
      {/* Image element with source and alt text */}
      <img src={imageSrc} alt={title} className="w-113 h-108 mb-4" />
      {/* Title element with styling */}
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      {/* Description element with styling */}
      <p className="text-lg text-center mb-6">{description}</p>
      {/* Button element with background color, text color, padding, and text */}
      <button className="bg-orange-500 text-white text-base px-4 py-2">{buttonText}</button>
    </div>
  );
};

// Export the Card component
export default Card;
