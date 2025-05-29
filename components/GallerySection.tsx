
import React from 'react';
import { Photo } from '../types';
import SectionContainer from './SectionContainer';
import PhotoItem from './PhotoItem';

interface GallerySectionProps {
  photos: Photo[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => {
  return (
    <SectionContainer id="galeria" title="Galéria" className="bg-white">
      <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Pozrite si fotky z našich minulých swapov a atmosféru plnú radosti a zdieľania. Tieto momentky zachytávajú úsmevy, nové priateľstvá a radosť z výmeny.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
