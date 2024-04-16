import React, { createContext, useState, useContext } from 'react';

interface FilterContextType {
  selectedFilter: string;
  handleFilterClick: (filter: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC = ({ children }: { children: any }) => {
  const filters = ['All', 'Active', 'Done'];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    console.log('Selected Filter:', filter);
  };

  return (
    <FilterContext.Provider value={{ selectedFilter, handleFilterClick }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
