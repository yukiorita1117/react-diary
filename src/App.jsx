import React from "react";
import { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "./reducers/index";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Menu />
    </>
  );
};

export default App;
