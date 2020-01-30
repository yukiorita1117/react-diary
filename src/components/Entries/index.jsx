import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
import Card from "../Card";

const EntriesWrapper = styled.div`
  margin-top: 24px;
`;

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  font-size: 1.4rem;
  color: #007bff;
`;

const Entries = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <EntriesWrapper>
        <H1>Diary</H1>
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
