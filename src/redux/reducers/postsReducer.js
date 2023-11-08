import { ACTION_TYPES } from '../actions/types';

const initialPostsState = {
  posts: [],
  next: null,
  prev: null,
};

export const postsReducer = (state = initialPostsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_POST: {
      return { ...state };
    }

    case ACTION_TYPES.GET_POSTS: {
      return { ...state, ...payload };
    }

    case ACTION_TYPES.DELETE_POST: {
      const updatedPosts = state.posts.filter((post) => post.id !== payload);

      return { ...state, posts: updatedPosts };
    }

    default: {
      return state;
    }
  }
};
