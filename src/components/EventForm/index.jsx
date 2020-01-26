import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from "../../actions";
import AppContext from "../../contexts/AppContext";
import { timeCurrentIso8601 } from "../../utils";

const StyledH4 = styled.h4`
  margin-top: 32px;
`;

const StyledButton = styled.button`
  margin-right: 4px;
`;

//stateもdispatchもオブジェクトなので{}でくくる
const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  //ここのstateはreducerが勝手に検知して変えてくれる(イベント発火時に)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = e => {
    //eはイベントオブジェクト的なやつ
    //preventDefault()メソッドで初期で備わってる全体再レンダリングを防止する。(更新して欲しいところだけレンダリングさせたい)
    e.preventDefault();
    dispatch({ type: CREATE_EVENT, title, body });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました！",
      operatedAt: timeCurrentIso8601()
    });

    setTitle("");
    setBody("");
  };

  //イベントハンドラは e が渡ってくる
  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm(
      "本当に全てのイベントを削除してもいいですか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENT, title, body });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました！",
        operatedAt: timeCurrentIso8601()
      });
    }
  };

  const deleteAllOperationLogs = e => {
    e.preventDefault();
    const result = window.confirm(
      "本当に全ての操作ログを削除してもいいですか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_OPERATION_LOGS });
    }
  };

  //disabledはtrueの時に非活性化する
  const unCreatable = title === "" || body === "";
  return (
    <>
      <StyledH4>イベント作成フォーム</StyledH4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>

        <StyledButton
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベント作成
        </StyledButton>
        <StyledButton
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </StyledButton>
        <StyledButton
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </StyledButton>
      </form>
    </>
  );
};

export default EventForm;
