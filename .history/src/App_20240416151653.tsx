import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './css/styles.theme';

function App() {
  const isDarkMode = false; // 다크 모드를 전환하려면 이 값을 변경하세요
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <TodoList />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default App;
