import { useState } from 'react';
import Menu from './Menu';

const Header = () => {
  // State to manage menu open/close status
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // Header container with fixed position and background styling
    <header className="relative w-full bg-white fixed w-full z-10">
      {/* Top banner with community message */}
      <div className="items-center p-2 pt-4 bg-gradient-to-t from-orange-200 to-white">
        <div className="text-sm text-center text-base font-normal">
          Join our community.<span className="font-bold">Learn more</span>
        </div>
      </div>
      
      {/* Main header content with logo and menu toggle */}
      <div className="flex justify-between items-center p-4 mt-5">
        <div className="text-lg font-bold">Toingg</div>
        
        {/* Menu toggle icon */}
        <img 
          src='https://s3-alpha-sig.figma.com/img/0b82/1028/11e4ba496cbcbc24f27a7b05874fe99d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlIGFgTHrHaK0TgZ0R-TV-rVFBB3YeiQ5wftCwswaVtqFxdRnth-BWDFDy-sEgJtXi0Y10PocLb9KhaOmY0LgCodaDwKNqX2WLY~KmWA5Gy3aoEPdqNgBIr7muNH1~6y9GIKufDdRNbKjxwdHnCaPBgJSGc9P06gohauNfyU7WPAQVhb8Ogv2XYUfupNmY9kV3sy9L2WXE1YLijP2PTmU3bUy19ALK1Z3zeECCZcbwMVpJjAta2-2Ux8nhmCFnjRvH-VOmFtOMr~GBAc-kvMSsKCyeiaADwaPtyJjJw3RKk3v4ehdzqjyJXhnFCnBV4jLv8ufTcWzYmatOT48K3Tag__' 
          height={32} 
          width={44} 
          onClick={toggleMenu}
        />
      </div>
      
      {/* Conditional rendering of the Menu component */}
      {menuOpen && <Menu />}
      
      {/* Hero section with main headline and buttons */}
      <section id="hero" className="text-center p-1 mt-16">
        {/* Main headline part 1 */}
        <h1 className="font-normal text-5xl mb-4 text-gray-600">Build AI Calling Agent that can do</h1>
        {/* Main headline part 2 */}
        <h1 className="font-bold text-5xl mb-20">Sales Call</h1>
        
        {/* Button to build voice agent */}
        <div className="flex justify-center items-center">
          <button 
            className="text-lg text-white font-semibold px-4 py-2 rounded mb-4 flex flex-col shadow-md shadow-black items-center w-80" 
            style={{
              background: 'linear-gradient(to right, rgba(255, 169, 107, 1), rgba(153, 91, 46, 1))'
            }}
          >
            <span>Build your own voice agent</span>
            <span className='text-black text-base font-medium'>"It's free!"</span>
          </button>
        </div>
        
        {/* Button to hear the AI in action */}
        <button className="text-lg font-semibold text-black px-4 py-3 rounded w-60 border border-black mb-20">Hear it in action</button>
      </section>
    </header>
  );
};

export default Header;
