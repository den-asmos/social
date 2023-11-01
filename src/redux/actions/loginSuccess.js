import { ACTION_TYPES } from './types';

export const loginSuccess = (data) => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload: data,
});
