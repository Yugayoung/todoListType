import React, { useState } from 'react';

export default function AddTodo() {
  const [text, setText] = useState('');

  // 입력값을 업데이트하는 함수
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 입력값을 투두 리스트에 추가하고 입력 필드를 초기화하는 함수
  const handleSubmit = () => {
    if (text.trim() !== '') {
      onAdd(ext);
      setText('');
    }
  };
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='Enter your todo'
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
