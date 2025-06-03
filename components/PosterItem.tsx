import React from "react";
import { Poster } from "../types";

interface PosterItemProps {
  poster: Poster;
  onClick: () => void;
}

const PosterItem: React.FC<PosterItemProps> = ({ poster, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={poster.src}
          alt={poster.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 ease-in-out flex items-end">
          <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h3 className="font-semibold text-sm mb-1">{poster.title}</h3>
            <p className="text-xs opacity-90">{poster.date}</p>
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-honey-dark transition-colors duration-300 ease-in-out rounded-xl"></div>
      
      {/* Click indicator */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <svg 
          className="w-4 h-4 text-honey-dark" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
          />
        </svg>
      </div>
    </div>
  );
};

export default PosterItem;
