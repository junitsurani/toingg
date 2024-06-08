import React, { useState } from 'react';

// List of countries with their code, name, and dial code
const countries = [
  { code: 'in', name: 'India', dialCode: '+91' },
  { code: 'us', name: 'United States', dialCode: '+1' },
  { code: 'es', name: 'Spain', dialCode: '+34' },
  // Add more countries as needed
];

const TryNowForm: React.FC = () => {
  // State variables for name, phone, country code, and language
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(countries[0].dialCode);
  const [language, setLanguage] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data to the console (replace with actual submission logic)
    console.log({ name, phone: `${countryCode}${phone}`, language });
  };

  return (
    <div className="max-w-md mx-10 my-20 bg-gradient-to-t from-orange-100 to-orange-200 p-8 rounded-xl shadow-md">
      {/* Form header */}
      <h2 className="text-2xl text-3xl font-bold mb-1 mt-[100px]">Try now</h2>
      <p className="mb-6 text-base font-medium text-gray-600">Get a call from Toingg</p>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
        {/* Name input field */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-black rounded-lg bg-transparent" // Updated input field style
        />
        
        {/* Phone number input with country code */}
        <div className="flex border border-black rounded-lg">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="p-1 rounded-l-lg bg-transparent text-gray-400" // Updated select field style
            style={{ width: '30%' }}
          >
            {countries.map((country) => (
              <option
                key={country.code}
                value={country.dialCode}
              >
                {country.dialCode}
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 border rounded-r-lg w-full bg-transparent" // Updated input field style
          />
        </div>
        
        {/* Language selection */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-3 mt-4 border border-black rounded-lg bg-transparent text-gray-400" // Updated select field style
        >
          <option value="" disabled>Choose your language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          {/* Add more options as needed */}
        </select>
        
        {/* Submit button */}
        <button type="submit" className="bg-orange-500 text-white p-3 rounded-full flex justify-center items-center w-30 h-30 mx-auto mt-[50px]">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0257 19.9998C15.1541 19.9998 13.9297 19.6846 12.0963 18.6605C9.86683 17.4105 8.14237 16.2565 5.92495 14.0453C3.78701 11.9091 2.74662 10.5261 1.29052 7.87691C-0.354456 4.88581 -0.074042 3.31793 0.239415 2.64783C0.612706 1.84693 1.16371 1.36791 1.87591 0.892454C2.28043 0.627466 2.70852 0.400313 3.15474 0.213874C3.1994 0.194677 3.24092 0.176374 3.27798 0.159856C3.49901 0.0603008 3.8339 -0.0901474 4.25809 0.0705688C4.54119 0.17682 4.79392 0.394233 5.18953 0.784863C6.00086 1.58487 7.10957 3.36659 7.51858 4.2416C7.79319 4.83134 7.97493 5.22063 7.97537 5.65724C7.97537 6.16841 7.71818 6.56261 7.40606 6.98806C7.34756 7.06797 7.28952 7.14431 7.23325 7.21842C6.89345 7.66486 6.81888 7.79388 6.868 8.02424C6.96758 8.48719 7.71014 9.86533 8.93048 11.0828C10.1508 12.3002 11.4895 12.9957 11.9543 13.0948C12.1945 13.1462 12.3263 13.0685 12.7871 12.7167C12.8532 12.6663 12.921 12.614 12.992 12.5618C13.468 12.2078 13.844 11.9573 14.3432 11.9573H14.3459C14.7803 11.9573 15.1523 12.1457 15.7685 12.4564C16.5722 12.8618 18.4079 13.956 19.2129 14.7681C19.6045 15.1627 19.8229 15.4145 19.9296 15.6971C20.0903 16.1225 19.939 16.456 19.8403 16.6793C19.8238 16.7163 19.8055 16.7569 19.7863 16.802C19.5983 17.2474 19.3698 17.6745 19.1035 18.0779C18.6289 18.7878 18.148 19.3373 17.3451 19.711C16.9329 19.9059 16.4817 20.0047 16.0257 19.9998Z" fill="white"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default TryNowForm;
