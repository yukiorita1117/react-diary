import React, { useContext } from "react";
import Event from "../Event";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
const EventsWrapper = styled.div`
  margin-top: 24px;
`;

const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <EventsWrapper>
        {/* //useContextを使おうって話
        <div>{value}</div> */}
        {/* //Old Context API 記法
        <AppContext.Consumer>
          {value => {
            return <div>{value}</div>;
          }}
        </AppContext.Consumer> */}
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {state.events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </tbody>
        </table>
      </EventsWrapper>
    </>
  );
};

export default Events;
