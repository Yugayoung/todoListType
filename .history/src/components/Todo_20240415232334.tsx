import React from 'react';

interface TodoProps {
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ text, completed }) => {
  return (
    <li>
      <input type='checkbox' checked={completed} />
      <label>{text}</label>
      <button>❌</button>
    </li>
  );
};

export default Todo;
