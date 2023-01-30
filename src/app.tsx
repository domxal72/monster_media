import React from "react";
import Layout from "./components/layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme, breakSm } from "./theme";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  @media only screen and (min-width: ${breakSm}px) {
    font-size: 14px;
  }
 }
`;

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </React.StrictMode>
  );
}
