import { createGlobalStyle } from 'styled-components';

export const colors = createGlobalStyle`
  --color-bg: #f5ebe0;
  --color-text: #393122;
  --color-accent: #d6ccc2;
  --color-white: #edede9;
  --color-scrollbar: #e3d5ca;
  --color-darkBeige: #d5bdaf;
`;

export const TodoListSection = createGlobalStyle`
  background-color: var(--color-bg);
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 0rem 2rem;
`;
