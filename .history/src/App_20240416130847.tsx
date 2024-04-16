import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
}

export const lightTheme = {
  background: '#f0f0f0',
};

export const darkTheme = {
  background: '#20224a',
};

export default App;
