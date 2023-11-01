import axios from 'axios';
import { loadUserSuccess } from './loadUserSuccess';
import { loadUserFail } from './loadUserFail';

export const loadUserAsync = () => {
  return async (dispatch) => {
    if (localStorage.getItem('access')) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('access')}`,
          Accept: 'application/json',
        },
      };

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/users/me/`,
          config
        );

        dispatch(loadUserSuccess(res.data));
      } catch (error) {
        dispatch(loadUserFail());
      }
    } else {
      dispatch(loadUserFail());
    }
  };
};
