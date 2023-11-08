import { signupSuccess } from './signupSuccess';
import { signupFail } from './signupFail';
import axios from 'axios';

export const signupAsync = (name, email, password, re_password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password, re_password });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/`,
        body,
        config
      );
      dispatch(signupSuccess(res.data));
    } catch (error) {
      dispatch(signupFail(error));
    }
  };
};
