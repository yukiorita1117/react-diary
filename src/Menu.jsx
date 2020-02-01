import React from "react";
import styled from "styled-components";

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
  <div className="container">
    <Calender />
  </div>
);
const page2 = () => (
  <div className="container">
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

  const NavList = styled.ul`
    display: flex;
    margin: 12px;
    position: relative;
    vertical-align: middle;
    padding-right: 40px;
  `;

  const NavItem = styled.li`
    border: 1px solid #428bca;
    border-radius: 0;
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    text-align: center;
    background-color: #fff;
    color: #428bca;

    :first-child {
      border-radius: 4px 0 0 4px;
    }
    :last-child {
      border-radius: 0 4px 4px 0;
    }

    :hover {
      background-color: #428bca;
      text-decoration: none;
      a:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  `;

  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div>
          <NavList>
            <NavItem>
              <Link to="/">Entries</Link>
            </NavItem>
            <NavItem>
              <Link to="/Calender">Calender</Link>
            </NavItem>
            <NavItem>
              <Link to="/Diary">Diary</Link>
            </NavItem>
          </NavList>

          {/* margin-top: 40px; */}
          <div style={{}}>
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
