import axios from 'axios';
import { loadUser } from './loadUser';

export const loadUserAsync = (token) => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/me/`,
      config
    );

    const user = res.data;

    dispatch(loadUser(user));
  };
};
