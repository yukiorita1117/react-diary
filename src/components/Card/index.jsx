import React, { useContext } from "react";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../../actions";
import AppContext from "../../contexts/AppContext";
import { timeCurrentIso8601 } from "../../utils";
import styled from "styled-components";
import { currentDate } from "../../utils";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const TextWrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
`;

const TextBodyWrapper = styled.div`
  padding: 8px 16px 16px 16px;
`;

const Headline = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
`;

const Subtitle = styled.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.0071428571em;
`;

const TextBody = styled.div`
  font-family: Roboto, sans-serif;
  line-height: 1.25rem;
  font-weight: 400;
  text-decoration: inherit;
  text-transform: inherit;
  color: rgba(0, 0, 0, 0.54);
`;

const ActionWrapper = styled(Button)``;

const Cards = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `本当にイベント(id:${id})を削除してもよろしいでしょうか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました！`,
        operatedAt: timeCurrentIso8601()
      });
    }
  };
  return (
    <Card>
      <TextWrapper>
        <Subtitle>{currentDate()}</Subtitle>
        <Headline>{event.title}</Headline>
      </TextWrapper>

      <TextBodyWrapper>
        <TextBody>{event.body}</TextBody>
      </TextBodyWrapper>
      <ActionWrapper>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickDeleteButton}
        >
          削除
        </Button>
      </ActionWrapper>
    </Card>
  );
};

export default Cards;
