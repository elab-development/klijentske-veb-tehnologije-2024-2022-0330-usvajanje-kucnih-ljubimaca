import "../style/GalleryCard.css"
import React from 'react'
import { GalleryCardProps } from "../modules/galleryCardModel";

const GalleryCard: React.FC<GalleryCardProps> = ({ dogImage }) => {
  return (
      <div className="galleryCard">
        <img src={dogImage} className="dogImage"/>
      </div>
  );
}

export default GalleryCard
