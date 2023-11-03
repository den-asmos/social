import axios from 'axios';
import { loginSuccess } from './loginSuccess';
import { loginFail } from './loginFail';

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/jwt/create/`,
        body,
        config
      );
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFail());
    }
  };
};
