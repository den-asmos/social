import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordAsync } from '../redux/actions';
import { Button, Input } from '../components';

const initialFormState = {
  email: '',
};

const ResetPassword = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const { email } = formData;
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(resetPasswordAsync(email));
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-[150px] flex justify-center items-center">
      <div className="min-w-[350px] flex flex-col justify-start items-center rounded-md shadow-md py-6 px-4">
        <h1 className="my-2 text-5xl text-[var(--color-violet)]">
          Password Reset
        </h1>
        <form onSubmit={onSubmit} className="w-[90%] text-lg">
          <div className="my-8">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={email}
              onChange={onChange}
            />
          </div>

          <Button type="submit" width="100%">
            Reset
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
