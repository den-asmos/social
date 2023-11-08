import { ACTION_TYPES } from '../actions/types';

const initialPostState = {
  id: null,
  title: null,
  content: null,
  publisher: {
    id: null,
    name: null,
  },
  image: null,
};

export const postReducer = (state = initialPostState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.GET_POST_BY_ID: {
      return { ...state, ...payload };
    }

    case ACTION_TYPES.UPDATE_POST: {
      return { ...state, title: payload.title, content: payload.content };
    }

    default: {
      return state;
    }
  }
};
