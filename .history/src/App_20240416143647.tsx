import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css';
import { darkTheme, lightTheme } from './css/styles.theme';

function App() {
  const isDarkMode = false;
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <DarkModeProvider theme={theme}>
      <Header />
      <TodoList />
    </DarkModeProvider>
  );
}
export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}  
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }  
`;
