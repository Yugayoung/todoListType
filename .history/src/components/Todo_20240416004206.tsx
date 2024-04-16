import React from 'react';

interface TodoProps {
  id: string;
  text: string;
  status: string; // 상태를 문자열로 변경
  handleChange: (id: string) => void;
  handleRemove: (id: string) => void;
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
        checked={status === 'done'} // 상태가 'done'일 때 체크박스를 체크함
        onChange={() => handleChange(id)}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleClickRemove}>❌</button>
    </li>
  );
}
