import React from 'react';

// InfoCard component definition
const InfoCard: React.FC = () => {
  return (
    <div className="max-w-md bg-gradient-to-r from-orange-50 to-orange-100 p-8 m-10 mt-50 rounded-lg shadow-md">
      {/* Video container */}
      <div className="relative w-full pb-9/16 mb-4" style={{ paddingTop: '56.25%' }}>
        {/* Embedded video */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://call.toingg.com/videos/Untitled%20design%20(1).mp4" // Replace with your video link
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Title */}
      <h2 className="text-2xl font-medium mb-4 text-center">
        Explore TOINGG in <span className="text-red-500">GPT</span> Store
      </h2>
      {/* List of features */}
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-base text-normal">
          <strong>Interactive Communication:</strong> Engage in single or batch calls using TOINGG GPT.
        </li>
        <li>
          <strong>Advanced Features:</strong> Leverage GPT for real-time sentiment analysis during calls.
        </li>
        <li>
          <strong>Data Export:</strong> Conveniently export call logs to CSV.
        </li>
        <li>
          <strong>Enhanced Usability:</strong> Tailored for users familiar with CSV functionalities.
        </li>
      </ul>
      {/* Button */}
      <div className="flex justify-center w-full">
        <button className="bg-gradient-to-r from-[rgba(252,152,80,1)] to-[rgba(173,76,6,1)] text-white px-4 py-2 mt-4 rounded-lg">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
