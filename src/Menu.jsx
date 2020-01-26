import React from "react";
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import reducer from "./reducers/index";
import AppContext from "./contexts/AppContext";
import Entries from "./components/Entries";
import Diary from "./components/Diary";
import Calender from "./components/Calender";

const APP_KEY = "appWithRedux";

const topPage = () => (
  <div className="container">
    <Entries />
  </div>
);

const page1 = () => (
  <div>
    <Calender />
  </div>
);
const page2 = () => (
  <div>
    <Diary />
  </div>
);

const Menu = () => {
  const appState = localStorage.getItem(APP_KEY);

  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: []
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  const liStyle = {
    display: "inline",
    width: "100px"
  };

  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div style={{ width: "500px", textAlign: "left" }}>
          <ul style={{ display: "flex" }}>
            <li style={liStyle}>
              <Link to="/">Entries</Link>
            </li>
            <li style={liStyle}>
              <Link to="/Calender">Calender</Link>
            </li>
            <li style={liStyle}>
              <Link to="/Diary">Diary</Link>
            </li>
          </ul>

          <div style={{ marginLeft: "50px" }}>
            <Route path="/" exact component={topPage} />
            <Route path="/Calender" exact component={page1} />
            <Route path="/Diary" exact component={page2} />
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default Menu;
