import React from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: Todo[]; // 변경된 부분: todoList -> todos
}

const Todo: React.FC<TodoProps> = ({ todos }) => {
  // 변경된 부분: todoList -> todos
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
