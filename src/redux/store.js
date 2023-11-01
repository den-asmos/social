import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

const initalState = {};

const reducer = combineReducers({ auth: authReducer });

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
