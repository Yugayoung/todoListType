import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header() {
  const filters = ['All', 'Active', 'Done'];
  //   filter는 변수명,  filters 배열의 각 요소를 가리킨다.
  const fliterList = filters.map((filter, index) => (
    <FilterLi key={index}>
      <FilterBtn onClick={() => handleFilterClick(filter)}>{filter}</FilterBtn>
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
      </div>
      <FilterDiv>
        <FilterUl>{fliterList}</FilterUl>
        <DarkmodeBtn>☀️</DarkmodeBtn>
      </FilterDiv>
      <p>Selected Filter: {selectedFilter}</p>
    </header>
  );
}

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterUl = styled.ul`
  display: flex;
  margin: 0rem;
  padding: 0rem;
`;

const FilterLi = styled.li`
  list-style: none;
`;

const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  &:hover {
    color: #fd6cfd;
  }
  &:active {
    background-color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-weight: bold;
  }
  &.after {
    color: #fd6cfd;
    background-color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-weight: bold;
  }
`;

const DarkmodeBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
`;
