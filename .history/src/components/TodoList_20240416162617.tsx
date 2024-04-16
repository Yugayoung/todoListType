import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

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

  const filteredTodoList = todoList.filter((todo) => {
    if (selectedFilter === 'All') {
      return true;
    } else if (selectedFilter === 'Active') {
      return todo.status === 'active';
    } else if (selectedFilter === 'Done') {
      return todo.status === 'done';
    }
    return true;
  });

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      {filteredTodoList.map((todo) => (
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
