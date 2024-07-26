import React, {useState, useEffect} from 'react'
import "./GalleryGrid.css"
import GalleryCard from "./GalleryCard"

const GalleryGrid: React.FC = () => {
    const [dogImages, setDogImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchDogImages = async () => {
            try{
                const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
                if(!response.ok){
                    throw new Error('Bad response from network');
                }
                const data = await response.json();
                setDogImages(data.message);
            }catch(error){
                console.error('Error fetching data: ', error);
            }
        };

        fetchDogImages();
    },[]) //mora, inace se stalno menjaju slike
  return (
    <div className="galleryGrid">
      {dogImages.map((dogImage,index) => (
        <GalleryCard key={index} dogImage={dogImage}/>
      ))}
    </div>
  );
}

export default GalleryGrid
