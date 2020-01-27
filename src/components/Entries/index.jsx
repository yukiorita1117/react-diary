import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
import Card from "../Card";

const EntriesWrapper = styled.div`
  margin-top: 24px;
`;

const Entries = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <EntriesWrapper>
        <h1>Entries</h1>
        {state.events.map((event, index) => (
          <>
            <Card key={index} event={event} />
            {/* TODO Cardスタイルできない問題どうにかする */}
            <br />
          </>
        ))}
      </EntriesWrapper>
    </>
  );
};

export default Entries;
