import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './css/styles.theme';
import GlobalStyle from './css/\bGlobalStyles';

function App() {
  const { darkMode } = useDarkMode(); // useDarkMode 훅을 사용하여 darkMode 상태값을 가져옵니다.

  return (
    <DarkModeProvider>
      <GlobalStyle theme={undefined} />
      <Header />
      <TodoList />
    </DarkModeProvider>
  );
}

export default App;
