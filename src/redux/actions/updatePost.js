import { ACTION_TYPES } from './types';

export const updatePost = (data) => ({
  type: ACTION_TYPES.UPDATE_POST,
  payload: data,
});
