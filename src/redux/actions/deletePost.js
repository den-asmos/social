import { ACTION_TYPES } from './types';

export const deletePost = (data) => ({
  type: ACTION_TYPES.DELETE_POST,
  payload: data,
});
