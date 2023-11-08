import { deletePost } from './deletePost';
import axios from 'axios';

export const deletePostAsync = (id) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.delete(
      `${process.env.REACT_APP_API_URL}/core/blog/v1/Publication/${id}/`,
      config
    );

    dispatch(deletePost(id));
  };
};
