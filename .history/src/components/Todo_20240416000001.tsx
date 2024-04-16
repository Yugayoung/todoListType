import React from 'react';

interface TodoItem {
    text: string;
    status: boolean;
  }

export default function Todo({ text, status }: TodoItem) {
  return (
    <li className="todoContainer">
      <input
        type='checkbox'
        id={id}
        checked={status === 'done'}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        {text}
      </label>
      
        <button >❌</button>
      
    </li>
    
  );
}
