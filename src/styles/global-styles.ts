import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 10px;
  }
  body {
   font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
