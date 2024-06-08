import React from 'react';

const TrustAndSafety = () => {
  return (
    <div className="container mx-auto px-4 py-16 my-[200px] text-center">
      {/* Icon at the top */}
      <div className="flex justify-center mb-8">
        <div className="bg-orange-400 p-4 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>

      {/* Main title */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        The highest standards of trust and safety
      </h1>

      {/* Description text */}
      <p className="text-lg mb-8 text-gray-600">
        We continue to actively restrict the calls we support, ensuring that our
        AI phone call technology continues to benefit consumers, businesses, and
        society as a whole.
      </p>

      {/* Grid for trust and safety features */}
      <div className="grid grid-cols-2 gap-8">
        {/* Call Monitoring feature */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-400 p-4 rounded-full shadow-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a2 2 0 01-2.947 0L5.95 8.413A1 1 0 015.5 7.686l-1.5-4.493a1 1 0 01-.684-.949zm7.5 0a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a2 2 0 01-2.947 0L15.95 8.413A1 1 0 0115.5 7.686l-1.5-4.493a1 1 0 01-.684-.949zm7.5 0a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a2 2 0 01-2.947 0L25.95 8.413A1 1 0 0125.5 7.686l-1.5-4.493a1 1 0 01-.684-.949z"
              />
            </svg>
          </div>
          <h2 className="text-base font-bold mb-2 text-gray-800">
            Call Monitoring
          </h2>
        </div>

        {/* Prompt Injection feature */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-400 p-4 rounded-full shadow-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12H6.75m0 0l-1.25 1.25m1.25-1.25L12 19.5m6.75-6.75l-1.25 1.25m1.25-1.25L21 12m-6.75-6.75l-1.25 1.25m1.25-1.25L12 6.75"
              />
            </svg>
          </div>
          <h2 className="text-base font-bold mb-2 text-gray-800">
            Prompt Injection
          </h2>
        </div>

        {/* Rate Limits feature */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-400 p-4 rounded-full shadow-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-base font-bold mb-2 text-gray-800">
            Rate Limits
          </h2>
        </div>

        {/* Internal Hard Audits feature */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-400 p-4 rounded-full shadow-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <h2 className="text-base font-bold mb-2 text-gray-800">
            Internal Hard Audits
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TrustAndSafety;
