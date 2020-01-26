import React, { useContext } from "react";
import Event from "../Event";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
const EntriesWrapper = styled.div`
  margin-top: 24px;
`;

const Entries = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <EntriesWrapper>
        <h1>Entries</h1>
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
      </EntriesWrapper>
    </>
  );
};

export default Entries;
