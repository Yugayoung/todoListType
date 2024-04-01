import React from 'react';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

export default function TodoList() {
  return (
    <section>
      <Todo />
      <AddTodo />
    </section>
  );
}
