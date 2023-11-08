import { useEffect, useState } from 'react';
import { loadPostsAsync } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader, PostPreview, Pagination } from '../components';

const Posts = () => {
  const { posts, next, prev } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPostsAsync()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  const onClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <>
      <h1 className="my-8 text-5xl text-[var(--color-violet)] text-center">
        Posts
      </h1>
      <hr className="my-4 mx-auto w-[65%] shadow-sm" />
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1080px] mx-auto p-8 grid grid-cols-3 gap-8">
          {posts.length &&
            posts.map((post) => (
              <PostPreview
                key={post.id}
                title={post.title}
                image={post.image}
                publisher={post.publisher.name}
                onClick={() => onClick(post.id)}
              />
            ))}
        </div>
      )}
      <Pagination next={next} prev={prev} />
    </>
  );
};

export default Posts;
