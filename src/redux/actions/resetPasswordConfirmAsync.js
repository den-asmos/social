import axios from 'axios';
import { resetPasswordConfirmSuccess } from './resetPasswordConfirmSuccess';
import { resetPasswordConfirmFail } from './resetPasswordConfirmFail';

export const resetPasswordConfirmAsync = (
  uid,
  token,
  newPassword,
  reNewPassword
) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ uid, token, newPassword, reNewPassword });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      );

      dispatch(resetPasswordConfirmSuccess());
    } catch (error) {
      dispatch(resetPasswordConfirmFail());
    }
  };
};
