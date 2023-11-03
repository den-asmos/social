import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthenticatedAsync } from '../redux/actions';
import { Navbar } from '../components';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticatedAsync());
  }, []);

  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
