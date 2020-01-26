import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { currentDate } from "../../utils";
import OperationLog from "../OperationLog";

const Calender = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h1>Calender</h1>
      <div>{currentDate()}</div>
      {/* <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">内容</th>
            <th scope="col">日時</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (
            <OperationLog key={index} operationLog={operationLog} />
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default Calender;
