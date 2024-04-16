import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'reset-css';
import { darkTheme, lightTheme } from './css/styles.theme';

function App() {
  const isDarkMode = false; // 다크 모드를 전환하려면 이 값을 변경하세요
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <TodoList />
        <GlobalStyle />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}  
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }  
`;

export default App;
