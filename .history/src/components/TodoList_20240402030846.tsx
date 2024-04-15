import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { TodoListSection } from '../css/header';

export default function TodoList() {
  return (
    <TodoListSection>
      <Todo />
      <AddTodo />
    </TodoListSection>
  );
}
