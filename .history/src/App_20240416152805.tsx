import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './css/styles.theme';

function App() {
  const { darkMode } = useDarkMode(); // useDarkMode 훅을 사용하여 darkMode 상태값을 가져옵니다.

  return (
    <DarkModeProvider>
      <Header />
      <TodoList />
    </DarkModeProvider>
  );
}

export default App;
