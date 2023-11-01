import { Link } from 'react-router-dom';
import { Button } from '../components';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="mt-4 flex justify-center items-center">
      <div className="p-8 flex flex-col text-lg rounded-md shadow-md">
        <h1 className="my-2 text-[var(--color-violet)] text-6xl">
          Welcome to Social!
        </h1>
        <p className="my-4">
          This is an incredible social network with production level features
        </p>
        <hr className="border-[var(--color-violet)]" />
        <p className="my-4">Click the button below</p>
        {isAuthenticated ? (
          <Link to="/posts">
            <Button>Explore</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
