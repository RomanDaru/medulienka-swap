
import React from 'react';
import { Photo } from '../types';

interface PhotoItemProps {
  photo: Photo;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-3 aspect-h-2">
      <img 
        src={photo.src} 
        alt={photo.alt} 
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 ease-in-out flex items-end">
        <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {photo.alt}
        </p>
      </div>
    </div>
  );
};

export default PhotoItem;
