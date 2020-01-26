import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const OperationLog = ({ operationLog }) => {
  const { dispatch } = useContext(AppContext);
  //   const handleClickDeleteButton = () => {
  //     const result = window.confirm(
  //       `本当にイベント(id:${id})を削除してもよろしいでしょうか？`
  //     );
  //     if (result) {
  //       dispatch({ type: DELETE_EVENT, id });
  //       dispatch({
  //         type: ADD_OPERATION_LOG,
  //         description: `イベント(id=${id})を削除しました！`,
  //         operatedAt: timeCurrentIso8601()
  //       });
  //     }
  //   };
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
