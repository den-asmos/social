import { getPostById } from './getPostById';
import { mapPost } from '../../helpers/mapPost';
import axios from 'axios';

export const getPostByIdAsync = (id) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/core/blog/v1/Publication/${id}/`,
      config
    );

    const post = mapPost(res.data);

    dispatch(getPostById(post));
  };
};
