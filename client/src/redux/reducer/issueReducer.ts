// issuesReducer.ts
import { ADD_ISSUE, DELETE_ISSUE } from './issuesActionTypes';

// Initial state
const initialState = {
  issues: [],
};

// Reducer function
const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.payload],
      };
    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id !== action.payload),
      };
    default:
      return state;
  }
};

export default issuesReducer;
