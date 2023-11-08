import { ACTION_TYPES } from './types';

export const loadUser = (data) => ({
  type: ACTION_TYPES.LOAD_USER,
  payload: data,
});
