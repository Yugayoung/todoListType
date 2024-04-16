import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { useFilter } from '../context/FilterContext';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export default function TodoList() {
  const { selectedFilter } = useFilter();
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  const addTodo = (todo: TodoItem) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const removeTodo = (id: string) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  const toggleTodoStatus = (id: string) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === 'active' ? 'done' : 'active',
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  const filtered = getFilteredItems(todoList, selectedFilter); // 수정된 부분

  return (
    <div>
      {filtered.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          status={todo.status}
          handleChange={() => toggleTodoStatus(todo.id)}
          handleRemove={() => removeTodo(todo.id)}
        />
      ))}
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

function getFilteredItems(todos: TodoItem[], filter: string) {
  // 수정된 부분
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
