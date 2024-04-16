import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import GlobalStyle from './css/\bGlobalStyles';

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyle theme={undefined} />
      <Header />
      <TodoList />
    </DarkModeProvider>
  );
}

export default App;
