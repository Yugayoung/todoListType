import React, { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  // 입력값을 업데이트하는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 입력값을 투두 리스트에 추가하고 입력 필드를 초기화하는 함수
  const handleSubmit = () => {
    if (text.trim() !== '') {
      onAdd(text);
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
      <button>Add</button>
    </form>
  );
}
