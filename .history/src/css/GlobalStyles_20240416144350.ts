import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'IM_Hyemin-Bold';
  src: url('./fonts/IM_Hyemin-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

:root {
  --color-bg: #f5ebe0;
  --color-text: #393122;
  --color-accent: #d6ccc2;
  --color-white: #edede9;
  --color-scrollbar: #e3d5ca;
  --color-darkBeige: #d5bdaf;
}

body {
  background: ${({ theme }: { theme: any }) => theme.bgColor};
  color: ${({ theme }: { theme: any }) => theme.textColor};
  margin: 0;
  font-family: 'IM_Hyemin-Bold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  width: 100%;
  height: 60%;
  max-width: 35rem;
}

`;

export default GlobalStyle;
