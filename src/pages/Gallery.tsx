import React from 'react'
import GalleryGrid from '../components/GalleryGrid'
import "./Gallery.css"

function Gallery() {
  return (
    <div className="allContents">
      <div className="contents">
        <h1 className="headingGallery">Udomljeni ljubimci</h1>
        <GalleryGrid/>
      </div>
    </div>
  )
};

export default Gallery

