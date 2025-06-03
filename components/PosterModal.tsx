import React, { useEffect } from "react";
import { Poster } from "../types";

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  poster: Poster | null;
}

const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  poster,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      return () => {
        document.body.classList.remove("modal-open");
      };
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !poster) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='poster-modal-title'>
      <div
        className='bg-white rounded-xl shadow-2xl p-2 md:p-8 mx-auto md:max-w-3xl transform transition-all duration-300 ease-in-out scale-100 opacity-100 flex flex-col'
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h2
              id='poster-modal-title'
              className='text-xl md:text-2xl font-bold text-honey-dark mb-1'>
              {poster.title}
            </h2>
            {/* <p className='text-gray-600'>{poster.date}</p> Leave this
            out for now */}
            {poster.description && (
              <p className='text-gray-700 mt-2 text-sm'>{poster.description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100'
            aria-label='Zavrieť modal'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Poster Image */}
        <div className='flex-1 flex items-center justify-center'>
          <img
            src={poster.src}
            alt={poster.alt}
            className='w-full max-h-[80vh] object-contain rounded-lg'
          />
        </div>

        {/* Footer */}
        <div className='mt-4 text-center'>
          <button
            onClick={onClose}
            className='bg-honey hover:bg-honey-dark text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-honey-dark focus:ring-opacity-50'>
            Zavrieť
          </button>
        </div>
      </div>
    </div>
  );
};

export default PosterModal;
