import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

export default function TodoList() {
  return (
    <section>
      <Todo />
      <AddTodo />
    </section>
  );
}
