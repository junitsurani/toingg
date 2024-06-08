import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Cards from '@/components/Cards';

// Array of card data
const cards = [
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/0471/9aa6/fdd6d9487038b14f41979b86a8802951?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvajxugELEq1KAvaUZ0d~td7GO0IOwJ5ZAJ04nMNaqFrTkwbe1VP1LqpZAPymJlcsvuHKeTOQ7qTgbAgvPGYE6brXk4v6f6W-G-OJrFfllc5IPFk8DZn~LadZwEkx9aHL0lNZ2tAVAWOC4eFsn4KTUGEfeKCRkBiVXIp33M-y9d~Lg2aqc~xVDrAxqPZ9GCXow8cQ44dEFgub2iWBKLlnlBeXqtFeL-UqGWCWWCHj8pMq7UUoKIUulCGUnfQHaKiU47pTL2QY4BndhFmJoFCrpY7O2twIzroXYPUqHlTr0jNA9Fw-PUNFpUWGjPy-FtSsWLdq18tNockCho6zz~wHA__', // Replace with your image link
    title: 'Ultra-Fast Response',
    description: 'Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.',
    buttonText: 'Try now',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/de07/1e3a/253774e17d7402e1f556d6e4e0e38e1f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ej0J2tSuW67hBusZUs6BrBP7-9p4PmvR5vNiNOrUpB6QepDe9EZIWHZZDb3C1rt7blATyHVbtejbAtUbURacSIEbXe2mRi3m1HTSlcee~uOROOQYXxDoimmChmipL01u5k0Zq7xm8dzfMImKa-3mHmxN-thXyeT88OW-lgnbMPoc~-Ed0BlTW2X~zxjYfEsrFth-VesWhGGTX8042mbekYX~okJf6A-a6LiuyekTPyIkGctBXheRhg2p--dDtoHabxgZ-lDQbz9710BwuL0yhgVJqAUfJCzBf2rMewSU3y0~mHB2FmXnNpmXEKRCnDxy0RPzeOJenFBpJS6ZnNLHAQ__', // Replace with your image link
    title: 'Smart Interruption Management',
    description: 'Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations.',
    buttonText: 'Try now',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/d9bb/c7f9/c3ae8d393a8266688310c1dc4186e502?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLsa-o6~-7CJ6jAxuBuyY-HYC2nd2Gl8JIa0RSnBJzUarpIOGxpjIebuQZNHY8dEGyLVWT7W1s9CQBhVuw6VKXAybgnfXolESUlIa~~D62Pzi7nmCqKZYjjGpxr~GfbGYAgOmMXyrOOTe81Foo6Z~NeAT6koG2lspq~c68CPb-Mim066KLSuqxrInjJXShiIr6gmH8axDF6lKf~q~IGksp~6FO7v8d4n-ANmQQhlyAqISEh6Q3NSoL3SH4ukQWqDT3cj4aD671BJEXFoWf-1NFYtl8W~XjMs~Bf9gLySjuY0RquBvsQha7RjAiVHBgsopSNk59KjD-QTEmNr1M2K9A__', // Replace with your image link
    title: 'Advanced Memory Recall',
    description: 'Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.',
    buttonText: 'Try now',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/7b38/253f/53e66b37858179a705087ef6feecbd47?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0Sw3To13t9AdeoQB0VHPH9ZCwkA0FfoXg0olN8rfgRl6m-xlxd6vdPsGZNDouiNekMiL8tvm9cSoao7iod8ThViZ9NBRpBmsiCUc2QO5jF9V3UcSB4tFYE-xN5cqKmGQ2eRdSoxDTqJYn9422O8p4xpnxaewY~wsRylWfR6RuHL2II8x3IRDZorpa~HGF7o-KjRnuuQjU56CtYAkcPbXgCiVqHW~~B~i-kWrTcJaPee5p3pfYEHrynKyKA1BTruJJMPUso1wzBdpLMwAeRlMms51SKJVdniWJ-YR7dnJ7HZErsvcL4hkn~LU7caRrHD2IbqdWCbHBuqTITA6WtUyw__', // Replace with your image link
    title: 'Dynamic Conversational Flows',
    description: 'Navigate through complex conversations with ease, thanks to our AI\'s ability to understand and adapt to various conversational pathways.',
    buttonText: 'Try now',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/0a84/39bf/e768dd52b482653b1cb4223dd41e5b86?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iNEGbbgQfmZLtLWmY7xA70HjdiwqCdBc7E9L5wpy32rMyNulcCTI1HrlY4ZXO4txzQ1fNn0o-S-QlLPqgkFSIKRWsWgV2YtZ2b3KS-FoHPphpU24~oDYNsHUUGEr40XH6OJn8bcI5ldmelbtvjUxY8LBM6cQEAvahQpAlJWNc~-lbAGgDWSxKJPmWGAk8y4FqldCuo0VfbZnaE37nXLDZC2-tMNda60Y9QMLvcKd1XvSNHhx-Q2gLojSF45q82xsSiMBKoWXlgT0Ot8zTpwtvzUm2OsmQdR1QOW0Seed~4cbxhiyXS055XmbFykWexTnVVnMSYgBzYxixkjIF~yWiA__', // Replace with your image link
    title: 'Custom AI Solutions',
    description: 'Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.',
    buttonText: 'Try now',
  },
  {
    imageSrc: 'https://s3-alpha-sig.figma.com/img/3e88/bb35/89cc30c4a8ce8e91a444f000a1039bec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nF3ZX4U-gqsodDD~xCzb~Yc~D2l4WuYzZ551tFbmespnRt1n6FgODLgKjjc6OWybpF51qRXwKdXTYUP4P3Ljd7a3nSXfekf6QAWJCBbZvMSgziwu9vUDdclX~mUMWlM5q7ZyyNPzTkTVbiQcIrOBwfuEto00eNOBYFrcDrQ~0LXQshtYyJM4Zu3lJelOG6Ncr0MbpqKAgRZ6VCOEYpCAeCHyQh9N4Qocc3NGDWNsrnfSRH3QwollYzctdWHSwdNvqLFNuK9FSWh3jMFNI49sC7da6SIh3llLQ0tRlQzHNzksliD6tsJIeGIpESJAemp~Nt0cF-F9p4bpPALg8go94Q__', // Replace with your image link
    title: 'Scalability at Your Fingertips',
    description: 'From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.',
    buttonText: 'Try now',
  },
  // Add more cards as needed
];

const Carousel: React.FC = () => {
  // State for keeping track of the current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Handlers for swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div className="relative max-w-md mx-auto my-[200px]" {...handlers}>
      <div className="overflow-hidden">
        {/* Container for cards with transition effect */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="min-w-full">
              {/* Render each card */}
              <Cards {...card} />
            </div>
          ))}
        </div>
      </div>
      {/* Dots for navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-orange-500' : 'bg-black'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
