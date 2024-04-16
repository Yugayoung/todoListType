import React, { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      {/* Todo 컴포넌트에서 props 이름 변경 */}
      <Todo />
      <AddTodo />
    </div>
  );
}
