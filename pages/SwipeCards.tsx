import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import InfoCard from './GPTStore'; // Import the InfoCard component
import CodeEditorCard from '../components/CodeEditorCard'; // Import the CodeEditorCard component

const SwipeableCard: React.FC = () => {
  // State to keep track of the current card index
  const [index, setIndex] = useState(0);

  // Handlers for swipe events
  const handlers = useSwipeable({
    // Function to handle swipe left event
    onSwipedLeft: () => setIndex(index === 0 ? 1 : 0),
    // Function to handle swipe right event
    onSwipedRight: () => setIndex(index === 0 ? 1 : 0),
    // Enable mouse tracking for swipe events
    trackMouse: true
  });

  return (
    <div {...handlers}>
      {/* Conditional rendering based on the current index */}
      {index === 0 ? (
        <InfoCard /> // Render InfoCard when index is 0
      ) : (
        <CodeEditorCard /> // Render CodeEditorCard when index is 1
      )}
    </div>
  );
};

export default SwipeableCard;
