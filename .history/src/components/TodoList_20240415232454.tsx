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
      {/* Todo 컴포넌트에서 props 이름 변경 */}
      <Todo todoList={todoList} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}
