import { loadPosts } from './loadPosts';
import { mapPost } from '../../helpers';
import axios from 'axios';

export const loadPostsAsync = (url = '/core/blog/v1/Publication/') => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}${url}`,
      config
    );

    const posts = res.data.results.map((post) => mapPost(post));
    const data = {
      posts,
      next: res.data.next,
      prev: res.data.previous,
    };

    dispatch(loadPosts(data));
  };
};
