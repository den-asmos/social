import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyAsync } from '../redux/actions';
import { Button } from '../components';

const Activate = () => {
  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  const onVerify = () => {
    dispatch(verifyAsync(params.uid, params.token));
    setVerified(true);
  };

  if (verified) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-[150px] flex justify-center items-center">
      <div className="min-w-[350px] flex flex-col justify-start items-center rounded-md shadow-md py-6 px-4 text-lg">
        <h1 className="mt-2 mb-8 text-5xl text-[var(--color-violet)]">
          Verify your account
        </h1>

        <Button onClick={onVerify} width="50%">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default Activate;
