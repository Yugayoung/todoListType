import React, { useState } from 'react';
import Todo, { TodoType } from './Todo';
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // 새로운 투두를 추가하는 함수
  const handleAddTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <Todo todos={todos} setTodos={setTodos} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}
