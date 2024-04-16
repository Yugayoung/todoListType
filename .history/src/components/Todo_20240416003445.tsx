import React from 'react';

interface TodoProps {
  id: string;
  text: string;
  status: string;
  handleChange: (id: string) => void;
  handleRemove: (id: string) => void; // 삭제 버튼 클릭 핸들러 추가
}

export default function Todo({
  id,
  text,
  status,
  handleChange,
  handleRemove,
}: TodoProps) {
  // 삭제 버튼 클릭 시 handleRemove 함수 호출
  const handleClickRemove = () => {
    handleRemove(id);
  };

  return (
    <li className='todoContainer'>
      <input
        type='checkbox'
        id={id}
        checked={status}
        onChange={() => handleChange(id)}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleClickRemove}>❌</button>{' '}
    </li>
  );
}
