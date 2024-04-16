import React from 'react';

interface TodoProps {
  id: string;
  text: string;
  status: string;
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
  const handleClickRemove = () => {
    handleRemove(id);
  };

  return (
    <li className='todoContainer'>
      <input
        type='checkbox'
        id={id}
        checked={status === 'done'}
        onChange={() => handleChange(id)}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleClickRemove}>❌</button>
    </li>
  );
}
