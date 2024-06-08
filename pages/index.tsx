// index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TryNow from './TryNow';
import VideoSection from '../components/VideoSection';
import SwipeableCard from './SwipeCards';
import CardCarousel from '../components/Features';
import Carousel from './Carousel';
import MostAskedQ from './MostAskedQ';
import TrustAndSafety from './TrustAndSafety';
import Footer from '../components/Footer';

const Home = () => {
  // State to track the viewport width
  const [isMobile, setIsMobile] = React.useState(false);

  // Effect to check viewport width on mount and on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if viewport width is less than or equal to 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Toingg Product Launch</title>
      </Head>
      <Header />
      <main>
        {isMobile ? (
          <>
            {/* Render the main content for mobile view */}
            <TryNow />
            <VideoSection />
            <SwipeableCard />
            <Carousel />
            <CardCarousel />
            <TrustAndSafety />
            <MostAskedQ />
          </>
        ) : (
          <div className="beta-message">
            {/* Render beta message for non-mobile view */}
            <h1>This is a beta version</h1>
            <p>Please view this website on a mobile screen.</p>
          </div>
        )}
      </main>
      <Footer />
      <style jsx>{`
        .beta-message {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          font-size: 1.5rem;
          background-color: #f0f0f0;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;
