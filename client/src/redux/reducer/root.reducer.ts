// rootReducer.ts
import { combineReducers } from 'redux';
import issuesReducer from './issueReducer';

// Combine all reducers
const rootReducer = combineReducers({
  issues: issuesReducer,
});

export default rootReducer;
