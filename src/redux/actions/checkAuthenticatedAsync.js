import { checkAuthenticatedSuccess } from './checkAuthenticatedSuccess';
import { checkAuthenticatedFail } from './checkAuthenticatedFail';
import axios from 'axios';

export const checkAuthenticatedAsync = () => {
  return async (dispatch) => {
    if (localStorage.getItem('access')) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      const body = JSON.stringify({ token: localStorage.getItem('access') });

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/jwt/verify/`,
          body,
          config
        );

        if (res.data.code !== 'token_not_valid') {
          dispatch(checkAuthenticatedSuccess());
        } else {
          dispatch(checkAuthenticatedFail());
        }
      } catch (error) {
        dispatch(checkAuthenticatedFail());
      }
    } else {
      dispatch(checkAuthenticatedFail());
    }
  };
};
