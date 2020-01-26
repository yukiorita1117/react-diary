import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions";

const operationLog = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operatioLog = {
        description: action.description,
        operatedAt: action.operatedAt
      };
      return [operatioLog, ...state];

    case DELETE_ALL_OPERATION_LOGS:
      return [];

    default:
      return state;
  }
};

export default operationLog;
