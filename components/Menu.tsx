import React from 'react';

const Menu = () => {
  // Define a gradient style for the menu background
  const gradientStyle = {
    background: 'linear-gradient(to bottom, rgba(254, 236, 223, 1), rgba(211, 135, 81, 1))'
  };

  return (
    // Menu container with absolute positioning and custom styling
    <div className="absolute top-50 left-8 min-h-[600px] w-5/6 text-white rounded-2xl" style={gradientStyle}>
      {/* List of menu items with flexbox styling */}
      <ul className="flex flex-col space-y-4 p-7">
        {/* Individual menu item */}
        <li>
          <a href="#contact" className="flex justify-between mt-10 text-black font-medium">
            Contact <span>&rarr;</span>
          </a>
        </li>
        {/* Individual menu item */}
        <li>
          <a href="#pricing" className="flex justify-between mt-10 text-base text-black font-medium">
            Pricing <span>&rarr;</span>
          </a>
        </li>
        {/* Individual menu item */}
        <li>
          <a href="#documentation" className="flex justify-between mt-10 text-base text-black font-medium">
            Documentation <span>&rarr;</span>
          </a>
        </li>
        {/* Individual menu item */}
        <li>
          <a href="#community" className="flex justify-between mt-10 text-base text-black font-medium">
            Join our community <span>&rarr;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
