import React from "react";

interface EventDetails {
  date: string;
  time: string;
  location: string;
  description: string;
}

interface UpcomingSwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  posterImageUrl?: string;
  eventDetails?: EventDetails;
}

const UpcomingSwapModal: React.FC<UpcomingSwapModalProps> = ({
  isOpen,
  onClose,
  posterImageUrl,
  eventDetails,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      // Cleanup function: Remove the class when isOpen becomes false or the component unmounts.
      return () => {
        document.body.classList.remove("modal-open");
      };
    }
    // If isOpen is false initially or becomes false, and the effect re-runs,
    // we also ensure the class is removed if it somehow persisted or if this effect
    // runs due to isOpen becoming false (though the cleanup from a previous "true" state should handle it).
    // This acts as an additional safeguard.
    // However, the primary removal is handled by the cleanup function of the effect when isOpen was true.
    // If isOpen is false, the class shouldn't be on the body due to this component.
    // To be absolutely certain, if isOpen is false, we can explicitly try to remove it.
    // This handles cases where the component might render with isOpen=false initially.
    else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'>
      <div
        className='bg-white rounded-xl shadow-2xl p-2 md:p-8 mx-auto md:max-w-3xl transform transition-all duration-300 ease-in-out scale-100 opacity-100 flex flex-col'
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className='absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10'
          aria-label='Zavrieť modal'>
          <svg
            className='w-7 h-7'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>

        {posterImageUrl ? (
          <div className='w-full'>
            <img
              src={posterImageUrl}
              alt='Plagát najbližšieho Medulienka Swapu'
              className='w-full h-auto object-contain rounded-lg max-h-[90vh]'
            />
          </div>
        ) : (
          <div className='text-center'>
            <div className='mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-honey-light mb-4'>
              <span className='text-3xl'>🗓️</span>
            </div>
            <h2
              id='modal-title'
              className='text-2xl md:text-3xl font-bold text-honey-dark mb-3'>
              Najbližší Medulienka Swap!
            </h2>
            {eventDetails && (
              <>
                <p className='text-gray-600 text-lg mb-2'>
                  <strong>Kedy:</strong> {eventDetails.date},{" "}
                  {eventDetails.time}
                </p>
                <p className='text-gray-600 text-lg mb-4'>
                  <strong>Kde:</strong> {eventDetails.location}
                </p>
                <p className='text-gray-700 mb-6'>{eventDetails.description}</p>
              </>
            )}
            <button
              onClick={onClose}
              className='w-full bg-honey hover:bg-honey-dark text-gray-800 font-semibold py-3 px-6 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-honey-dark focus:ring-opacity-50'>
              Rozumiem, ďakujem!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingSwapModal;
