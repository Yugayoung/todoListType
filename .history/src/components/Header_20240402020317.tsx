import React, { useState } from 'react';

export default function Header() {
  const filters = ['All', 'Active', 'Done'];
  //   filter는 변수명,  filters 배열의 각 요소를 가리킨다.
  const fliterList = filters.map((filterName, index) => (
    <li key={index}>
      <button>{filter}</button>
    </li>
  ));
  const [filter, setFilter] = useState([filters[0]]);
  return (
    <header>
      <div>
        <h2>Todo-list📝</h2>
        <button>☀️</button>
      </div>
      <div>
        <ul>{fliterList}</ul>
      </div>
    </header>
  );
}
