import React from "react";
import { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "./reducers/index";
import Menu from "./Menu";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
input, button, textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
`;

const App = () => {
  return (
    <>
      <Menu />
      <GlobalStyle />
    </>
  );
};

export default App;
