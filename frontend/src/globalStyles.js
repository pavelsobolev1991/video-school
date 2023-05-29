import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html * {
    line-height: 1.3;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: none;
  }
`;

export default GlobalStyles;
