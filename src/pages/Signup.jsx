import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../redux/actions';
import { Button, Input } from '../components';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  re_password: '',
};

const Signup = () => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const { name, email, password, re_password } = formData;
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password === re_password) {
      dispatch(signupAsync(name, email, password, re_password));
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="mt-14 flex justify-center items-center">
      <div className="min-w-[350px] min-h-[400px] flex flex-col justify-start items-center rounded-md shadow-md py-6 px-4">
        <h1 className="my-2 text-5xl text-[var(--color-violet)]">Sign Up</h1>
        <p className="mb-2">Create your account</p>
        <form onSubmit={onSubmit} className="w-[90%] text-lg">
          <div className="my-8">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="my-8">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="mt-8">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="mt-8 mb-10">
            <Input
              type="password"
              name="re_password"
              placeholder="Confirm your password..."
              value={re_password}
              onChange={onChange}
            />
          </div>

          <Button type="submit" width="100%">
            Register
          </Button>
        </form>

        <div>
          <div className="flex mt-6 gap-3">
            <Link
              to="/login"
              className="text-[var(--color-violet)] hover:text-black ease-in duration-100"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
