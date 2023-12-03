// store.ts
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/root.reducer';

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
