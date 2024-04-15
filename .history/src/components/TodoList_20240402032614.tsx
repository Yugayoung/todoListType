import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import * as S from '../css/header';

export default function TodoList() {
  return (
    <S.TodoListSection>
      <Todo />
      <AddTodo />
    </S.TodoListSection>
  );
}
