import { ACTION_TYPES } from './types';

export const signupFail = (data) => ({
  type: ACTION_TYPES.SIGNUP_FAIL,
  payload: data,
});
