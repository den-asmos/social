import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/actions';
import { Button, Input, Error } from '../components';

const initialFormState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(initialFormState);
  const { email, password } = formData;
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(loginAsync(email, password));
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const errorMessage =
    error?.response?.data?.detail || 'Something went wrong...';

  return (
    <div className="mt-14 flex justify-center items-center">
      <div className="min-w-[350px] min-h-[400px] flex flex-col justify-start items-center rounded-md shadow-md py-6 px-4">
        <h1 className="my-2 text-5xl text-[var(--color-violet)]">Sign In</h1>
        <p className="mb-2">Sign into your account</p>
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
          <div className="mt-8">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={password}
              onChange={onChange}
            />
          </div>

          {error && <Error message={errorMessage} />}

          <Button type="submit" width="100%" margin="mt-8">
            Login
          </Button>
        </form>

        <div>
          <div className="flex mt-6 gap-3">
            <Link
              to="/signup"
              className="text-[var(--color-violet)] hover:text-black ease-in duration-100"
            >
              Don't have an account?
            </Link>
          </div>
          <div className="flex justify-start mt-2 gap-3">
            <Link
              to="/reset-password"
              className="text-[var(--color-violet)] hover:text-black ease-in duration-100"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
