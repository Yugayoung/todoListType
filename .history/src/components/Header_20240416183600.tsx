import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext';
import { useFilter } from '../context/FilterContext';

export default function Header() {
  const { filters, selectedFilter, handleFilterClick } = useFilter();
  //   filter는 변수명,  filters 배열의 각 요소를 가리킨다.
  const fliterList = filters.map((filter, index) => (
    <FilterLi key={index}>
      <FilterBtn
        onClick={() => handleFilterClick(filter)}
        className={filter === selectedFilter ? 'after' : ''}
      >
        {filter}
      </FilterBtn>
    </FilterLi>
  ));

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <HeaderCss>
      <div>
        <h2>Todo-list📝</h2>
      </div>
      <FilterDiv>
        <FilterUl>{fliterList}</FilterUl>
        <DarkmodeBtn onClick={toggleDarkMode}>
          {!darkMode && '☀️'}
          {darkMode && '🌙'}
        </DarkmodeBtn>
      </FilterDiv>
    </HeaderCss>
  );
}

const HeaderCss = styled.div`
  background: ${({ theme }: { theme: any }) => theme.main};
  color: ${({ theme }: { theme: any }) => theme.textColor};
  padding: 1rem;
`;
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
  margin-bottom: 0rem;
`;

const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
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
