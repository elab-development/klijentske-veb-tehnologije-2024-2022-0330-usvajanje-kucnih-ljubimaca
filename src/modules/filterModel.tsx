export interface FilterProps {
    categories: string[];
    onFilterChange: (selectedCategories: string[]) => void;
  }