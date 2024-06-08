import React from "react";

// Define the props interface for FAQItem
interface FAQItemProps {
  question: string; // Question text
}

// Define the FAQItem component
const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  return (
    // Container for each FAQ item with flex layout, space between items, padding, and bottom border
    <div className="flex justify-between py-4 mx-10 border-b border-gray-200">
      {/* Question text */}
      <div className="text-lg">{question}</div>
      {/* Plus icon for expanding the answer */}
      <div className="text-2xl mx-2 cursor-pointer">+</div>
    </div>
  );
};

// Define the props interface for FAQ component
interface FAQProps {
  items: { question: string }[]; // Array of FAQ items with questions
}

// Define the FAQ component
const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    // Container for the entire FAQ section with padding and margin
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {/* Title for the FAQ section */}
      <div className="text-3xl font-bold mb-4 mx-10">Frequently asked questions</div>
      {/* Container for FAQ items with vertical spacing */}
      <div className="space-y-4">
        {/* Render each FAQ item */}
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} />
        ))}
      </div>
    </div>
  );
};

// Export the FAQ component
export default FAQ;
