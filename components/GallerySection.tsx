import React from "react";
import Masonry from "react-masonry-css";
import { Photo } from "../types";
import SectionContainer from "./SectionContainer";
import PhotoItem from "./PhotoItem";

interface GallerySectionProps {
  photos: Photo[];
}

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  800: 1,
};

const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => {
  return (
    <SectionContainer id='galeria' title='Galéria' className='bg-white'>
      <p className='text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto'>
        Pozrite si fotky z našich minulých swapov a atmosféru plnú radosti a
        zdieľania. Tieto momenty zachytávajú úsmevy, nové priateľstvá a radosť z
        výmeny.
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid justify-center'
        columnClassName='my-masonry-grid_column'>
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </Masonry>
    </SectionContainer>
  );
};

export default GallerySection;
