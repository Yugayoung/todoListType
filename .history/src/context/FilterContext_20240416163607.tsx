import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
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
