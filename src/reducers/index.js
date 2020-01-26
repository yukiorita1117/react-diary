//Root Reducer
import { combineReducers } from "redux";
import events from "./events";
import operationLogs from "./operationLogs";

//eventsとしてcombineReducerで定義したので、eventsはオブジェクトになっている
export default combineReducers({ events, operationLogs });
