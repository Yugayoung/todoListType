import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import styled from 'styled-components';

function App() {
  return (
    <DarkModeProvider>
      <Container>
        <Header />
        <TodoList />
      </Container>
    </DarkModeProvider>
  );
}
const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
`;
export default App;
