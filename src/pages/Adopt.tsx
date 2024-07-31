import ImageCard from '../components/ImageCard'
import Filter from '../components/Filter';
import { useState } from 'react';
import img1 from '../assets/adopt1.jpg'
import img2 from '../assets/adopt2.jpg'
import img3 from '../assets/adopt3.jpg'
import img4 from '../assets/adopt4.jpg'
import img5 from '../assets/adopt5.jpg'
import '../style/Adopt.css'

const Adopt = () => {
  const allCategories = ['pas', 'macka', 'zec'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const cards = [
    { imagee: img1, title: 'Beni', text: 'pas', buttonText: 'saznaj vise', path: '', categories: ['pas'] },
    { imagee: img2, title: 'Dzeki', text: 'pas', buttonText: 'saznaj vise', path: '', categories: ['pas'] },
    { imagee: img3, title: 'Cici', text: 'macka', buttonText: 'saznaj vise', path: '', categories: ['macka'] },
    { imagee: img4, title: 'Bela', text: 'pas', buttonText: 'saznaj vise', path: '', categories: ['pas'] },
    { imagee: img5, title: 'Bendzamin', text: 'macka', buttonText: 'saznaj vise', path: '', categories: ['macka'] },
  ];

  const filteredCards = cards.filter((card) =>
    selectedCategories.length === 0 || card.categories.some((category) => selectedCategories.includes(category))
  );

  return (
    <div className='card-all'>
      <div className="card-filter">
        <Filter categories={allCategories} onFilterChange={setSelectedCategories} />
      </div>
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Adopt;