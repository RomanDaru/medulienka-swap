import React, { useState } from "react";
import { Poster } from "../types";
import SectionContainer from "./SectionContainer";
import PosterItem from "./PosterItem";
import PosterModal from "./PosterModal";

interface PosterCollectionSectionProps {
  posters: Poster[];
}

const PosterCollectionSection: React.FC<PosterCollectionSectionProps> = ({
  posters,
}) => {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePosterClick = (poster: Poster) => {
    setSelectedPoster(poster);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPoster(null);
  };

  if (!posters || posters.length === 0) {
    return null;
  }

  return (
    <>
      <SectionContainer
        id='postery'
        title='Naše plagáty'
        className='bg-honey-light'>
        <p className='text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto'>
          Pozrite si plagáty z našich minulých swapov a nadchádzajúcich
          udalostí. Kliknite na plagát pre lepší pohľad.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
          {posters.map((poster) => (
            <PosterItem
              key={poster.id}
              poster={poster}
              onClick={() => handlePosterClick(poster)}
            />
          ))}
        </div>

        {posters.length === 0 && (
          <div className='text-center py-12'>
            <div className='mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-white mb-4'>
              <span className='text-3xl'>📋</span>
            </div>
            <p className='text-gray-600 text-lg'>
              Plagáty budú čoskoro dostupné.
            </p>
          </div>
        )}
      </SectionContainer>

      <PosterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        poster={selectedPoster}
      />
    </>
  );
};

export default PosterCollectionSection;
