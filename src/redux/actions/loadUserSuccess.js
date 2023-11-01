import { ACTION_TYPES } from './types';

export const loadUserSuccess = (data) => ({
  type: ACTION_TYPES.USER_LOAD_SUCCESS,
  payload: data,
});
