import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface AddTodoProps {
  addTodo: (text: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState('');

  // 입력값을 업데이트하는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 입력값을 투두 리스트에 추가하고 입력 필드를 초기화하는 함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작을 막습니다.
    if (text.trim() !== '') {
      addTodo({ id: uuidv4(), text, status: 'active' }); // props로 전달받은 addTodo 함수 호출
      setText(''); // 투두 추가 후 입력 필드를 비웁니다.
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
