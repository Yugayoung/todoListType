import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header() {
  const filters = ['All', 'Active', 'Done'];
  //   filter는 변수명,  filters 배열의 각 요소를 가리킨다.
  const fliterList = filters.map((filter, index) => (
    <FilterLi key={index}>
      <button onClick={() => handleFilterClick(filter)}>{filter}</button>
    </FilterLi>
  ));
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    console.log('Selected Filter:', filter);
  };
  return (
    <header>
      <div>
        <h2>Todo-list📝</h2>
        <button>☀️</button>
      </div>
      <div>
        <ul>{fliterList}</ul>
      </div>
      <p>Selected Filter: {selectedFilter}</p>
    </header>
  );
}

const FilterLi = styled.li`
  list-style: none;
`;
