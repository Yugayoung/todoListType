import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

interface AddTodoProps {
  addTodo: (todo: TodoItem) => void; // addTodo 함수의 매개변수를 TodoItem으로 변경
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('');

  // 입력값을 업데이트하는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 입력값을 투두 리스트에 추가하고 입력 필드를 초기화하는 함수
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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='할 일을 추가해주세요.'
      />
      <button type='submit'>추가</button>
    </form>
  );
}
