import "./GalleryCard.css"
import React from 'react'

interface GalleryCardProps{
    dogImage:string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ dogImage }) => {
  return (
      <div className="galleryCard">
        <img src={dogImage} className="dogImage"/>
      </div>
  );
}

export default GalleryCard