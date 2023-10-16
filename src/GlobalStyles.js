import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #4F6272;
  box-sizing: border-box;
  font-family: 'Montserrat';
  margin: 0;
  padding-bottom: 80px;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
