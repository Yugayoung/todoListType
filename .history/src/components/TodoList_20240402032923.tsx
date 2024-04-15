import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { createGlobalStyle } from 'styled-components';

export default function TodoList() {
  return (
    <TodoListSection>
      <Todo />
      <AddTodo />
    </TodoListSection>
  );
}

export const TodoListSection = createGlobalStyle`
  background-color: var(--color-text);
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 0rem 2rem;
`;
