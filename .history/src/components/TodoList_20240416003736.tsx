import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

interface TodoItem {
  id: string;
  text: string;
  status: boolean;
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  // 로컬 스토리지에서 투두 리스트를 불러오는 함수
  useEffect(() => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []); // 페이지가 처음 로드될 때만 실행됩니다.

  // 투두를 todoList에 추가하고 로컬 스토리지에 저장하는 함수
  const addTodo = (todo: TodoItem) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  // 특정 id의 투두를 제거하고 로컬 스토리지에 저장하는 함수
  const removeTodo = (id: string) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  // 특정 id의 투두 상태를 변경하고 로컬 스토리지에 저장하는 함수
  const toggleTodoStatus = (id: string) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          status={todo.status}
          handleChange={() => toggleTodoStatus(todo.id)} // 체크박스 선택 이벤트 핸들러 변경
          handleRemove={() => removeTodo(todo.id)}
        />
      ))}
      <AddTodo addTodo={addTodo} />
    </div>
  );
}
