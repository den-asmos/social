import { useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordConfirmAsync } from '../redux/actions';
import { Button, Input } from '../components';

const initialFormState = {
  new_password: '',
  re_new_password: '',
};

const ResetPasswordConfirm = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const { new_password, re_new_password } = formData;
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      resetPasswordConfirmAsync(
        params.uid,
        params.token,
        new_password,
        re_new_password
      )
    );
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
              type="password"
              name="new_password"
              placeholder="Enter new password..."
              value={new_password}
              onChange={onChange}
            />
          </div>

          <div className="my-8">
            <Input
              type="password"
              name="re_new_password"
              placeholder="Confirm new password..."
              value={re_new_password}
              onChange={onChange}
            />
          </div>

          <Button type="submit" width="100%">
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
