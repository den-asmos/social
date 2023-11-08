import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deletePostAsync,
  getPostByIdAsync,
  loadUserAsync,
} from '../redux/actions';
import { Loader, Button, Error } from '../components';
import { editIcon, deleteIcon } from '../assets';

const Post = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { isAuthenticated, user, access } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadUserAsync(access));
    }
    dispatch(getPostByIdAsync(params.id)).then(() => {
      setLoading(false);
    });
  }, [dispatch, params.id]);

  const onPostDelete = () => {
    if (isAuthenticated) {
      dispatch(deletePostAsync(params.id))
        .then(() => {
          navigate('/posts');
        })
        .catch((error) => {
          setError(`You can't delete this post`);
        });
    } else {
      setError(`You can't delete this post`);
    }
  };

  const onPostEdit = () => {
    if (isAuthenticated) {
      navigate(`/posts/${params.id}/edit`);
    } else {
      setError(`You can't edit this post`);
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-[1080px] p-8 flex flex-col justify-start items-center rounded-md shadow-sm shadow-[var(--color-violet)]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full flex gap-4">
            <Button invert={true} onClick={onPostEdit}>
              <img src={editIcon} alt="edit-icon" className="h-6 w-6 " />
            </Button>
            <Button invert={true} onClick={onPostDelete}>
              <img src={deleteIcon} alt="delete-icon" className="h-6 w-6 " />
            </Button>
            {error && <Error message={error} />}
          </div>
          <div className="w-full flex justify-end items-center gap-8">
            <div className="flex justify-center text-center flex-col">
              <h1 className="text-5xl text-[var(--color-violet)]">
                {post.title}
              </h1>
              <span className="mb-4 font-semibold">
                By {post.publisher.name}
              </span>
            </div>
            <div className="w-fit my-4 p-4 rounded-md border-r border-b border-[var(--color-violet)] shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-[400px] object-contain rounded-md"
              />
            </div>
          </div>
          <hr className="my-8 w-full border" />
          <p className="text-lg">{post.content}</p>
        </>
      )}
    </div>
  );
};

export default Post;
