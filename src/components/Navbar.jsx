import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import Button from './Button';
import { createIcon } from '../assets';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signedLinks = () => {
    return (
      <div className="flex items-center gap-4">
        <NavLink
          to="/posts"
          className="hover:text-[var(--color-violet)] duration-200 ease-in"
        >
          Posts
        </NavLink>
        <Link to="/posts/create">
          <Button invert={true} className="flex items-center gap-2">
            <img src={createIcon} alt="create-icon" className="h-6 w-6" />
            Create Post
          </Button>
        </Link>
      </div>
    );
  };

  const unsignedLinks = () => {};

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="p-6 shadow-sm">
      <div className="flex justify-between items-center text-lg">
        <Link
          to="/"
          className="text-[var(--color-violet)] text-3xl font-semibold mr-8"
        >
          Social
        </Link>

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="hover:text-[var(--color-violet)] duration-200 ease-in"
            >
              Home
            </NavLink>
            {isAuthenticated ? signedLinks() : unsignedLinks()}
          </div>

          {isAuthenticated ? (
            <Button onClick={onLogout}>Log Out</Button>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
              <Link to="/signup">
                <Button invert={true}>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
