import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPostAsync } from '../redux/actions';
import { Button, Input } from '../components';
import { saveIcon } from '../assets';

const initialFormState = {
  title: '',
  content: '',
};

const PostCreate = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormState);
  const [loadedImage, setLoadedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { access } = useSelector((state) => state.auth);
  const navigate = useNavigate();

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

    dispatch(createPostAsync(data, access)).then(() => {
      navigate('/posts');
    });
  };

  return (
    <div className="mx-auto mt-8 max-w-[1080px] p-8 flex flex-col justify-start items-center rounded-md shadow-sm shadow-[var(--color-violet)]">
      <div className="w-full flex gap-4">
        <Button invert={true} onClick={onPostSave}>
          <img src={saveIcon} alt="edit-icon" className="h-6 w-6 " />
        </Button>
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
        </div>
        <div className="w-fit min-h-[300px] flex flex-col justify-start items-center gap-4 my-4 p-4 rounded-md border-r border-b border-[var(--color-violet)] shadow-md">
          <input type="file" onChange={onImageChange} />
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
    </div>
  );
};

export default PostCreate;
