// DarkModeContext.tsx
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../css/styles.theme';
import { GlobalStyle } from '../css/GlobalStyles';

interface ContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<ContextProps>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark = localStorage.theme === 'dark';
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  function updateDarkMode(darkMode: boolean) {
    if (darkMode) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  }

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <GlobalStyle />
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
