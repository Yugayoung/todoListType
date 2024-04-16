import React from 'react';

export default function Todo({ todoList }) {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {/* 각 투두 아이템을 렌더링하는 코드 */}
          <input type='checkbox' checked={todo.completed} />
          <label>{todo.text}</label>
          <button>❌</button>
        </li>
      ))}
    </ul>
  );
}
