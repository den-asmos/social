import { ACTION_TYPES } from './types';

export const signupSuccess = (data) => ({
  type: ACTION_TYPES.SIGNUP_SUCCESS,
  payload: data,
});
