import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import Button from './Button';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              className="hover:text-[var(--color-violet)] duration-200 ease-in"
            >
              Home
            </NavLink>
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
