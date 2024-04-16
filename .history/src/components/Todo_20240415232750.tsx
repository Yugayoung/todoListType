import React from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: Todo[];
}

const Todo: React.FC<TodoProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {/* 각 투두 아이템을 렌더링하는 코드 */}
          <input type='checkbox' checked={todo.completed} />
          <label>{todo.text}</label>
          <button>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
