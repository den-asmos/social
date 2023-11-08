import axios from 'axios';
import { createPost } from './createPost';
import { mapPost } from '../../helpers';

export const createPostAsync = (newPost, token) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `JWT ${token}`,
      },
    };

    await axios.post(
      `${process.env.REACT_APP_API_URL}/core/blog/v1/Publication/`,
      newPost,
      config
    );

    dispatch(createPost());
  };
};
