//state:前の状態(未定義の可能性もあるので初期化する)
//サンプルイベント
// events = [
//   { id: 1, title: "タイトル1", body: "内容だよ" },
//   { id: 1, title: "タイトル２", body: "内容だよ!!" }
// ];

import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from "../actions";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      console.log("reducer内部", state);
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;

      //stateを展開して、id挿入し、eventも展開して挿入
      return [...state, { ...state, id, ...event }];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENT:
      return [];
    default:
      return state;
  }
};

export default events;
