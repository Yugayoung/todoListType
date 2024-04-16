import React from 'react';
import styled from 'styled-components';

interface TodoProps {
  id: string;
  text: string;
  status: string;
  handleChange: (id: string) => void;
  handleRemove: (id: string) => void;
}

interface TodoLabelProps {
  status: string;
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
    <TodoLi className='todoContainer'>
      <input
        type='checkbox'
        id={id}
        checked={status === 'done'}
        onChange={() => handleChange(id)}
      />
      <TodoLabel htmlFor={id} status={status}>
        {text}
      </TodoLabel>
      <DeleteBtn onClick={handleClickRemove}>❌</DeleteBtn>
    </TodoLi>
  );
}

const TodoLi = styled.li`
  list-style: none;
  padding: 0rem 1rem 0.6rem 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  border-bottom: 1px solid gray;
`;
const TodoLabel = styled.label<TodoLabelProps>`
  flex: 1 1;
  color: ${({ theme }: { theme: any }) => theme.textColor};
  margin: 0rem 0.5rem;
  /* 비우지 않고 none 으로 하는게 더 좋은가? */
  text-decoration: ${(props) =>
    props.status === 'done' ? 'line-through' : 'none'};
  text-decoration-color: red;
  text-decoration-thickness: 3px;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  padding-top: 2px;
  &:hover {
    color: red;
  }
`;
