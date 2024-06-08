
// Import necessary dependencies
import React, { useState } from 'react'; // Import React and useState hook
import { useSwipeable } from 'react-swipeable'; // Import useSwipeable hook for swipe gestures
import Cards from './infoCard'; // Import InfoCard component
// Define array of card objects with image source, title, and description
const cards = [
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/9103/df8c/068f32cf41e572a8c8d0f9b76f4b4010?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQLDEE-Ro6FYlDLslyyeuiKFqnZvhAbQD6sCsrXIWjS~UWxY-PMKRkgMpui93l8zN7LTC6MuFGwqyCjP~JjnHY1v8C~SDdQtlHJRbXQ-2PXQHgTwuhRrCCO1KkcvT3nk0t6RLIaRLEGYj~zyybQLHx5dY5gpYOocNIQRKL~Ne4~BBlhwhKinWylbcWwtySNne-YLzX8IwHuYebq5vWmiKYLwJqBx73BA2EFuc0arlf72~1xN6Otw9eIDxZtZo0FFa-HVrEKGrhJTwWmE8dRkzMhNr8YwO~YDW7iXDseNt6FOkyATJeUaNG9EspmikAXrATr7Y0WkFCoWcDirzOBM7w__', // Replace with your image link
    title: 'Fine tuning',
    description: 'Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/2f76/b59f/19a978f101b0d5254fd48f3f133c31dd?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKECRC6vhzT-eSog3sX9xlosWueZjf5a5FIQ9HoBsWXBkuHqF7QpYWGuPneGdmy3DQg2gkjFgFMuh94pMQeVyZEhSHt8D3U5UoH-CxkEXHaANFwZaveEoRa6~BQhD7XcPtWaaQSlOyG00VJi0~iRj98YvGw1OY4jQhIN~7eXJNJAjPM4IkyO9pn8xDZmbgR8zaEPmcygvt7dt86fo6uPcbYP8QWXGW--fXO2fYZQZxrEWyycQoq7Z3pioTUMCrg4WDeuRaWD~qs8JC0sgfptm0qks6gJB6p7PBt-rGJ7NMVcdCTuczcHwu6Zuj7FxxKYlmVx3a9Jo3RlPkII6QYCbA__', // Replace with your image link
    title: 'Custom tools',
    description: 'Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/6048/eae2/e3e79d4fa1ea6c956d4d989ce3874756?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MAr~q~Jegdri3NrBlEpjFerriqe8yBBDIThMZwMEfLDBkMYbAVo3sZaR50NlC405RtskjGBN0bE0y5VWwy4pbFcDuT6sRgBd4ww16uQQN08mJ4Swquz4eaPpfoIGiORg6S3mk~uPM81YzKY7QwnevzFdAKz8TmdKL4O7FkexFesXxj~LBn5HAiVVw-nrjuXXTMcJunvZdiZMrUSbT4B3vI8ZUJbtmLdIhNgw-EQ36T3cXy3c60cCNmqWsbNMUm-oGhLHyV~tGlRmvis7x9MdlmxwCFRT~RvDyU7CB1SZNtRQq2wdHVQGzFJjvGI0Sow0ACWKVTWwa17ddSQhj9KGPg__', // Replace with your image link
    title: 'Dedicated infrastructure',
    description: 'Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents.',
  },
  // Add more cards as needed
];

// Define CardCarousel component
const CardCarousel: React.FC = () => {
  // Define state for current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Swipe gesture handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  // Render component
  return (
    <div className="relative max-w-md mx-auto" {...handlers}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="min-w-full">
              <Cards {...card} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-orange-500' : 'bg-black'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Export the CardCarousel component
export default CardCarousel;
