import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { useFilter } from '../context/FilterContext';
import styled from 'styled-components';

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

  const filteredTodoList = todoList.filter((todo) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Active') return todo.status === 'active';
    if (selectedFilter === 'Done') return todo.status === 'done';
    return false;
  });

  return (
    <section>
      <TodoUl>
        {filteredTodoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            status={todo.status}
            // 이미 아이디를 넘겨줘서 중복된걸 넘겨주니까
            // handleChange={() => toggleTodoStatus(todo.id)}
            handleChange={toggleTodoStatus}
            handleRemove={() => removeTodo(todo.id)}
          />
        ))}
      </TodoUl>
      <AddTodo addTodo={addTodo} />
    </section>
  );
}

const TodoUl = styled.ul`
  background-color: ${({ theme }: { theme: any }) => theme.beige};

  margin: 0rem;
  height: 400px;
  padding: 10px 1px;
  flex: 1 1 auto;
  overflow-y: auto;
`;
