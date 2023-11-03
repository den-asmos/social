import { ACTION_TYPES } from '../actions/types';

const initialState = {
  title: '',
  content: '',
  publisher: '',
  image: '',
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};
