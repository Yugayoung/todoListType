import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

interface AddTodoProps {
  addTodo: (todo: TodoItem) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo({
        id: uuidv4(),
        text: text,
        status: 'active',
      });
      setText('');
    }
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <Input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='할 일을 추가해주세요.'
      />
      <AddBtn type='submit'>추가</AddBtn>
    </InputForm>
  );
}

const InputForm = styled.form`
  width: 100%;
  display: flex;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  border-radius: 0rem 1rem 1rem 1rem;
`;
const Input = styled.input`
  flex: 1 0 auto;
  font-size: 1.3rem;
  border: none;
  border-top: 2px solid gray;
  border-radius: 0rem 0rem 0rem 1rem;
  padding: 1rem;
`;

const AddBtn = styled.button`
  background-color: ${({ theme }: { theme: any }) => theme.main};
  border: none;
  font-size: 1.5rem;
  padding: 2px 4px;
  border-top: 2px solid gray;
  width: 4rem;
  border-radius: 0rem 0rem 1rem 0rem;
  &:hover {
    color: red;
  }
`;
