// issuesActions.ts
import { ADD_ISSUE, DELETE_ISSUE } from '../constants/actionTypes';

// Action creators
export const addIssue = (issue) => ({
  type: ADD_ISSUE,
  payload: issue,
});

export const deleteIssue = (issueId) => ({
  type: DELETE_ISSUE,
  payload: issueId,
});
