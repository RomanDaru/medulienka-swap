import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id='hero'
      className='relative bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1647013751862-0cb47477668d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='container mx-auto px-6 py-24 md:py-40 relative z-10 flex flex-col items-center text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
          Vitajte na Medulienka Swap!
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl'>
          Vymeňte, ušetrite, potešte! Spoločne tvoríme udržateľnejšiu budúcnosť.
        </p>
        <a
          href='#o-nas'
          className='bg-honey hover:bg-honey-dark text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg'>
          Zistiť viac
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
