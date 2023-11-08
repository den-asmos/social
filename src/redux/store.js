import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { postReducer } from './reducers/postReducer';
import { postsReducer } from './reducers/postsReducer';

const initalState = {};

const reducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  posts: postsReducer,
});

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
