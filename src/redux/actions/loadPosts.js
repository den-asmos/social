import { ACTION_TYPES } from './types';

export const loadPosts = (data) => ({
  type: ACTION_TYPES.GET_POSTS,
  payload: data,
});
