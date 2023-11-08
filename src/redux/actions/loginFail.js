import { ACTION_TYPES } from './types';

export const loginFail = (data) => ({
  type: ACTION_TYPES.LOGIN_FAIL,
  payload: data,
});
