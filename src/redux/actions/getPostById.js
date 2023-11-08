import { ACTION_TYPES } from './types';

export const getPostById = (data) => ({
  type: ACTION_TYPES.GET_POST_BY_ID,
  payload: data,
});
