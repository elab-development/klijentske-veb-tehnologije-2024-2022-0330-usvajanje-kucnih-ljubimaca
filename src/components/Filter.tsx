import React, { useState } from 'react';
import '../style/Filter.css'
import { FilterProps } from '../modules/filterModel';


const Filter = ({ categories, onFilterChange }: FilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedSelectedCategories);
    onFilterChange(updatedSelectedCategories);
  };

  return (
    <div className='filter-container'>
      <p>Filter:</p>
      {categories.map((category) => (
        <label key={category} >
          <input
            type="checkbox"
            value={category}
            onChange={() => handleCheckboxChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default Filter;