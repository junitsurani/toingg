import React from 'react';

// Define the CodeEditorCard component
const CodeEditorCard: React.FC = () => {
  return (
    // Card container with max width, background color, padding, margin, and rounded corners
    <div className="max-w-md bg-gray-200 p-8 m-10 mt-50 rounded-lg shadow-md">
      {/* Header section with background color, padding, rounded top corners, flex layout, and space-between alignment */}
      <div className="bg-gray-900 p-4 rounded-t-lg flex justify-between items-center">
        {/* Text element with white color */}
        <span className="text-white">Python</span>
        {/* Button with white text */}
        <button className="text-white">Copy Code</button>
      </div>
      {/* Code editor section with background color, padding, rounded bottom corners, and fixed height */}
      <div className="bg-black p-4 rounded-b-lg h-80">
        {/* Preformatted text for code display */}
        <pre className="text-white">
        {/* Code snippet */}
        <code>print(&quot;Hello, World!&quot;)</code>
      </pre>
      </div>
      {/* Language selection section with background color, padding, rounded corners, and flex layout */}
      <div className="bg-gray-300 p-4 mt-4 rounded-lg flex justify-around">
        {/* Button for Python language with orange background */}
        <button className="bg-orange-500 p-1 rounded">
          {/* Python logo */}
          <img src="https://s3-alpha-sig.figma.com/img/29c4/f1a1/c52e0455e8931f5bcdf4d2fbc75dcd46?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G256b-bRn96dfJl3XQ1Wc5oIZX2EHAsgYGIaK39cFezwOUwYSsaIJA0N3Voz4gBjDUeqUB89g~UhO6uQbZB~3iaBXDPll3k1MCGHX~LbXWazIYSmKTv0igkplu2NVto7TPBRCg6pEDF~RNDKZ6SFTjhqFPP6pwNXl618nICMYH7~yo7ZocEWbb6f2PJLYLvwbyjHbX5wtIhBiPSS-AQiUd8oJtZbdMQd0j7092ZPsgLakWtQC5VB3eVpRB58-NRcJwq2VUc~XmfO3ltIijq4IpCF5OakYytUHvTK6Bm2nHxCT8Uww62tVyERF4JALwZwPjIK7d3HReGHMo2rYWzpQA__" alt="Python" className="w-15 h-10" />
        </button>
        {/* Button for JavaScript language */}
        <button className="p-1">
          {/* JavaScript logo */}
          <img src="https://s3-alpha-sig.figma.com/img/1d30/e396/623d89d09334cdf710d88d3f80ebeb99?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQJHhl35UtaeFr4U8jNGqW08swcQWGzzHcUI4Im2H8KLfqLIO~2AHLQmYPpQRXSN2zKRzL4RwB1~2PxZM9u3dZ6dWDBos4MI3MSOmU0cLK8EWOZYxSwu1S2XvSwDrTTRj~Fs2J3TeeHcVCTU3E1vogZ0K37Oh58WqlKQbDfl5~m~m~gpEQHWMGzNoyBIvYGwPxMIR1I1O0p1qiRFYOfzxCI5CJpBZd1ovOjgRHeqRxbqXbgWMD2ZPmM3w2~Xx9J6y6jhWT5o7q8C90P1Prsr5vTLbcK7gkTAJaSyROc8-ULZ5gqgPLxX6wvkMeXB2lTv7mxA8qe6djNMuZaokBNy5Q__" alt="JavaScript" className="w-15 h-10" />
        </button>
        {/* Button for PHP language */}
        <button className="p-1">
          {/* PHP logo */}
          <img src="https://s3-alpha-sig.figma.com/img/859c/5bed/f6cce9d78ea072661dda4811956b0e02?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXEpxYVmaX7eL3SmHhnR0iIa~d04~Gcxp2vp9Osian~JWkQEEM47KhYq4~StMt0XPn73tJ5QqGjIPNOQR68RBrbeRCxkOGrcVgJsFSQ7aAESiBgU54WdQXgEBm46xZ~UiY4jxLDg6peUX5iPjQxAoS5nkUgmee86MTudPOdKo7OWzyDu7rpHaZnuxMGliB24g0QPrg5ScHlRiSpH7ARvWL6FfN2jVApPPv-kGDqj1BUUbaa-z8-kNZ8Kep5RHmLDnc6Vtv1KTPApGTMuY9DFnZZLZ78z7zO8bucli~d7aBFctffPtHXsGccyxzV7QVRFZNECFIoO6ZzO16hivLR9UA__" alt="PHP" className="w-15 h-10" />
        </button>
        {/* Button for Ruby language */}
        <button className="p-1">
          {/* Ruby logo */}
          <img src="https://s3-alpha-sig.figma.com/img/055a/d705/3dc93a5264df9a8d391bb77f3d0eb05d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nxv2bjCUfBreiPOPUm9eC51HaNU-~AIS68qiNuiX-T8QkD~G1Er9fUjVTgWkkSLjOHnTpaWBqLODCEN1ShjrMGi3LaeByytwlGiUgBO0MOltQ3qgM6LgHo3smTzW~IALkq7Fvkd6lmAR03CRYSKNk80pi2cZuujNmApl-RsC9xxb8X7FPAgvDJyCAg2HHfuuGrkA2gFSoeq7qAEN66X7S5BRlPFrVQRc-qHRnltWh0kYcaSTjETjmEFCq5b1zF1867ODWhgv84We3lRKaSbB-wv3gQ9s26yGgoVUNmolTYKqGgGQuwoeckvang~LOpO6AxoZZnQ1SEeg2JZKzIdd-Q__" alt="Ruby" className="w-15 h-10" />
        </button>
        {/* Button for Swift language */}
        <button className="p-1">
          {/* Swift logo */}
          <img src="https://s3-alpha-sig.figma.com/img/baad/8a25/7078466e8eb080d1cf1fc44d1d5f51a1?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQUeQUPG4QI5T0xDoIIWUlotwQ8amFGfEi~u4Z6BDQxFBsLHnqxZDDfSgnouM2kS8eOwNJjptqrM8Vwe~AM8U5xDlQ9Pb0RSIADVEkBuILdV7qkcSEzo4VBamYDHzUfZ-lWODynHsFscq1WnUA66SIP~W03PsRpdcpPCzcaOIoiOzotXreZcSK2nxx5zvNgQMSFVvjQTi-qwEbT0a3cCkLKib8hJ9W9eoAjsgJhyCXjPH3KufChAlhofeDL98TwAQlk5AP2DRkaErRmtW3zhPVtvbhyKEB43QWlPY6aLL0i~nY1NDeOWZa7bCcpKf~nf04deECwqBF9f6upx6L8TQQ__" alt="Swift" className="w-15 h-10" />
        </button>
      </div>
      {/* Call to action section with text */}
      <div className="text-center mt-4 mb-[120px]">
        {/* Bold text */}
        <p className="text-xl font-bold">Build your own voice agent</p>
        {/* Gray text */}
        <p className="text-gray-600">in just a few lines of code</p>
      </div>
    </div>
  );
};

// Export the CodeEditorCard component
export default CodeEditorCard;
