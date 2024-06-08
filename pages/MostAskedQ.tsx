// app.tsx
import React from "react";
import FAQ from "../components/Faq"; 

const MostAskedQ: React.FC = () => {
  // Define the list of FAQ items
  const faqItems = [
    { question: "What is Toingg's pricing?" },
    { question: "What is Toingg?" },
    { question: "How secure is Toingg?" },
    { question: "How secure is Toingg?" },
    { question: "How does billing work?" },
    { question: "What phone numbers can I use with Toingg?" },
    { question: "Does Toingg support multiple languages?" },
  ];

  return (
    <div>
      {/* Render the FAQ component and pass the faqItems as a prop */}
      <FAQ items={faqItems} />
    </div>
  );
};

export default MostAskedQ;
