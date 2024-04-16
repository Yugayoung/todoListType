import React, { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  // 새로운 투두를 추가하는 함수
  const handleAddTodo = (text: string) => {
    setTodoList([...todoList, { text, completed: false }]);
  };

  return (
    <div>
      <Todo todoList={todoList} setTodos={setTodoList} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}
