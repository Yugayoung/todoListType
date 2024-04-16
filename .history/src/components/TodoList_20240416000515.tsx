import React, { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

interface TodoItem {
  text: string;
  status: boolean;
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  // 투두를 todoList에 추가하는 함수
  const addTodo = (text: string) => {
    const newTodoList = [...todoList, { text, status: false }];
    setTodoList(newTodoList);
  };

  return (
    <div>
      {/* addTodo 함수를 AddTodo 컴포넌트에 전달합니다. */}
      <AddTodo addTodo={addTodo} />
      {/* todoList를 Todo 컴포넌트에 전달합니다. */}
      {todoList.map((todo, index) => (
        <Todo key={index} text={todo.text} status={todo.status} />
      ))}
    </div>
  );
}
