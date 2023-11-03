import { verifyFail } from './verifyFail';
import { verifySuccess } from './verifySuccess';
import axios from 'axios';

export const verifyAsync = (uid, token) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ uid, token });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}users/activation/`,
        body,
        config
      );

      dispatch(verifySuccess());
    } catch (error) {
      dispatch(verifyFail());
    }
  };
};
