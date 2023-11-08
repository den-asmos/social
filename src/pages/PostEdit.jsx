import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByIdAsync, updatePostAsync } from '../redux/actions';
import { Loader, Button, Input, Error } from '../components';
import { saveIcon } from '../assets';

const PostEdit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { access } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({});
  const [loadedImage, setLoadedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(getPostByIdAsync(params.id)).then(() => {
      const initialFormState = {
        title: post.title,
        content: post.content,
      };
      setFormData(initialFormState);
      setLoading(false);
    });
  }, [dispatch, params.id, post.title, post.content]);

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onImageChange = ({ target }) => {
    const file = target.files[0];
    const blob = URL.createObjectURL(file);
    setPreview(blob);
    setLoadedImage(file);
  };

  const onPostSave = () => {
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    if (loadedImage) {
      data.append('image', loadedImage);
    }

    dispatch(updatePostAsync(params.id, data, access))
      .then(() => {
        navigate('/posts');
      })
      .catch((error) => {
        setError(`You can't edit this post`);
      });
  };

  return (
    <div className="mx-auto mt-8 max-w-[1080px] p-8 flex flex-col justify-start items-center rounded-md shadow-sm shadow-[var(--color-violet)]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full flex gap-4">
            <Button invert={true} onClick={onPostSave}>
              <img src={saveIcon} alt="edit-icon" className="h-6 w-6 " />
            </Button>
            {error && <Error message={error} />}
          </div>
          <div className="w-full flex justify-end items-center gap-8">
            <div className="flex justify-center text-center flex-col">
              <Input
                type="text"
                name="title"
                placeholder="Enter post title..."
                value={formData.title}
                onChange={onChange}
                className="text-5xl text-[var(--color-violet)]"
              />
              <span className="mb-4 font-semibold">
                By {post.publisher.name}
              </span>
            </div>
            <div className="w-fit min-h-[300px] flex flex-col justify-start items-center gap-4 my-4 p-4 rounded-md border-r border-b border-[var(--color-violet)] shadow-md">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={onImageChange}
              />
              {loadedImage && (
                <img
                  src={preview}
                  alt="loaded"
                  className="mt-8 w-[200px] object-contain"
                />
              )}
            </div>
          </div>
          <hr className="my-8 w-full border" />
          <Input
            type="text"
            name="content"
            placeholder="Enter post content..."
            value={formData.content}
            onChange={onChange}
            className="text-lg"
          />
        </>
      )}
    </div>
  );
};

export default PostEdit;
