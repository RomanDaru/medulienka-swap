
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-24 md:py-40 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Vitajte na Medulienka Swap!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
          Vymeňte, ušetrite, potešte! Spoločne tvoríme udržateľnejšiu budúcnosť.
        </p>
        <a
          href="#o-nas"
          className="bg-honey hover:bg-honey-dark text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
        >
          Zistiť viac
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
