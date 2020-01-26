import React from "react";
import { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/index";
import AppContext from "../contexts/AppContext";
import Events from "../components/Events";
import EventForm from "../components/EventForm";
import OperationLogs from "../components/OperationLogs";

const APP_KEY = "appWithRedux";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  //localStorageがあれば取得、なければinitialStateをセット
  //JSON.parse()でオブジェクトに戻す
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: []
      };
  //ここのstateはreducerが勝手に検知して変えてくれる(イベント発火時に)
  // stateはオブジェクト
  const [state, dispatch] = useReducer(reducer, initialState);

  //第一引数：コールバック関数 第二引数：監視する状態
  //監視対象が変化したらコールバックが呼ばれる
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
