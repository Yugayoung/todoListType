import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './css/styles.theme';

function App() {
  const { darkMode } = useDarkMode(); // useDarkMode 훅을 사용하여 darkMode 상태값을 가져옵니다.
  const theme = darkMode ? darkTheme : lightTheme; // darkMode 값에 따라 적절한 테마를 선택합니다.

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
