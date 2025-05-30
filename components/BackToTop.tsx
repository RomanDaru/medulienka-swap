import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-honey hover:bg-honey-dark text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-honey-dark focus:ring-opacity-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      aria-label='Späť na začiatok'>
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </button>
  );
};

export default BackToTop;
