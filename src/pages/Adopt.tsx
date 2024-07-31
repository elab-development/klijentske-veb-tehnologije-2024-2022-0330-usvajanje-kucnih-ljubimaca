import ImageCard from '../components/ImageCard'
import Filter from '../components/Filter';
import { useState, useEffect } from 'react';
import {cards} from '../components/adoptData'
import '../style/Adopt.css'
import Pagination from '../components/Pagination'; 

const itemsPerPage = 2;

const Adopt = () => {
  //logika za filter
  const allCategories = ['pas', 'macka', 'zec'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredCards = cards.filter((card) =>
    selectedCategories.length === 0 || card.categories.some((category) => selectedCategories.includes(category))
  );

  //logika za paginaciju
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPosts = filteredCards.length;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredCards.slice(startIndex, endIndex);

  return (
    <div className='card-all'>
      <div className="card-filter">
        <Filter categories={allCategories} onFilterChange={setSelectedCategories} />
      </div>
      <div className="card-container">
        <div className="cards">
        {currentItems.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}</div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
      </div>
      
  );
};

export default Adopt;