import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthenticatedAsync, loadUserAsync } from '../redux/actions';
import { Navbar } from '../components';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticatedAsync());
    dispatch(loadUserAsync());
  }, []);

  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
