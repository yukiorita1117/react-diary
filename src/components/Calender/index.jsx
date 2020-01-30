import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../contexts/AppContext";
import { currentMonth, currentDay, currentWeek } from "../../utils";
import OperationLog from "../OperationLog";

const Calender = () => {
  const { state } = useContext(AppContext);

  const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const CurrentMonth = styled.p`
    color: #007bff;
  `;
  const CurrentDate = styled.p`
    color: #007bff;
    font-size: 10rem;
    line-height: 140px;
  `;
  const CurrentWeek = styled.p`
    color: #007bff;
  `;
  return (
    <>
      {/* <H1>Calender</H1> */}
      <Wrapper>
        <CurrentMonth>{currentMonth()}</CurrentMonth>
        <CurrentDate>{currentDay()}</CurrentDate>
        <CurrentWeek>{currentWeek()}</CurrentWeek>
      </Wrapper>
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
