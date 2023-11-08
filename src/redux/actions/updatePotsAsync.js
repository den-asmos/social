import { mapPost } from '../../helpers';
import { updatePost } from './updatePost';
import axios from 'axios';

export const updatePostAsync = (id, newPost, token) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `JWT ${token}`,
      },
    };

    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/core/blog/v1/Publication/${id}/`,
      newPost,
      config
    );

    dispatch(updatePost(res.data.detail));
  };
};
