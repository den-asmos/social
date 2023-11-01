import axios from 'axios';
import { resetPasswordSuccess } from './resetPasswordSuccess';
import { resetPasswordFail } from './resetPasswordFail';

export const resetPasswordAsync = (email) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
        body,
        config
      );

      dispatch(resetPasswordSuccess());
    } catch (error) {
      dispatch(resetPasswordFail());
    }
  };
};
