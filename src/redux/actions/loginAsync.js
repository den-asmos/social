import axios from 'axios';
import { loginSuccess } from './loginSuccess';
import { loginFail } from './loginFail';
import { loadUserAsync } from './loadUserAsync';

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/jwt/create/', body, config);

      dispatch(loginSuccess(res.data));

      dispatch(loadUserAsync());
    } catch (error) {
      dispatch(loginFail());
    }
  };
};
