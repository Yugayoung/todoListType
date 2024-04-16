import React from 'react';
interface TodoProps {
  id: string;
  text: string;
  status: boolean;
  handleChange: (id: string) => void;
}

export default function Todo({ id, text, status, handleChange }: TodoProps) {
  return (
    <li className='todoContainer'>
      <input
        type='checkbox'
        id={id}
        checked={status}
        onChange={() => handleChange(id)}
      />
      <label htmlFor={id}>{text}</label>
      <button>❌</button>
    </li>
  );
}
