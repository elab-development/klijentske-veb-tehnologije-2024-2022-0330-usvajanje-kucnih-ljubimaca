import React from 'react'
import "../style/GalleryGrid.css"
import GalleryCard from "./GalleryCard"
import useFetch from './useFetch'

interface DogImagesResponse {
  message: string[];
  status: string;
}

const GalleryGrid: React.FC = () => {
  const { data, loading, error } = useFetch<DogImagesResponse>('https://dog.ceo/api/breeds/image/random/6');

  if (loading) return <h1 className="loading">Ucitavanje...</h1>;
  if (error) return <h1 className="error">Greska: {error.message}</h1>;

  return (
    <div className="galleryGrid">
        {data?.message.map((url, index) => (
          <GalleryCard key={index} dogImage={url} />
        ))}
    </div>
  );
};


export default GalleryGrid;