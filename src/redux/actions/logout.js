import { ACTION_TYPES } from './types';

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGOUT,
    });
  };
};
