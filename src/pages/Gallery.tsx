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
      <img src='./src/assets/pozadina.png' className="background"/>
    </div>
  )
};

export default Gallery
