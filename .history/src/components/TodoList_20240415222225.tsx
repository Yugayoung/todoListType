import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import styled from 'styled-components';

export default function TodoList() {
  return (
    <section>
      <Todo />
      <AddTodo />
    </section>
  );
}
