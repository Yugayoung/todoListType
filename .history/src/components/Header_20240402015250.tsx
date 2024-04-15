import React from 'react';

export default function Header() {
  const filters = ['All', 'Active', 'Done'];
  const fliterList = filters.map((filter) => <li>{filter}</li>);
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
