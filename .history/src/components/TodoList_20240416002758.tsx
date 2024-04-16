import React, { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

interface TodoItem {
  id: string;
  text: string;
  status: boolean;
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  // 투두를 todoList에 추가하는 함수
  const addTodo = (todo: TodoItem) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          status={todo.status}
          handleChange={() => {}}
        />
      ))}
      <AddTodo addTodo={addTodo} />
    </div>
  );
}
