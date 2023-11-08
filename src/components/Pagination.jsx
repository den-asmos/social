import { useDispatch } from 'react-redux';
import { loadPostsAsync } from '../redux/actions';
import Button from './Button';
import { arrowIcon } from '../assets';
import { useState } from 'react';

const Pagination = ({ next, prev }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const onPrevClick = () => {
    if (prev) {
      dispatch(loadPostsAsync(prev.slice(21))).then(() => {
        setCurrentPage(currentPage - 1);
      });
    }
  };

  const onNextClick = () => {
    if (next) {
      dispatch(loadPostsAsync(next.slice(21))).then(() => {
        setCurrentPage(currentPage + 1);
      });
    }
  };

  return (
    <div className="my-8 w-full flex justify-center items-center gap-4">
      <Button invert={true} onClick={onPrevClick} disabled={!prev}>
        <img src={arrowIcon} alt="arrow-icon" className="h-6 w-6 rotate-180" />
      </Button>
      <span className="text-xl text-[var(--color-dark)]">{currentPage}</span>
      <Button invert={true} onClick={onNextClick} disabled={!next}>
        <img src={arrowIcon} alt="arrow-icon" className="h-6 w-6 " />
      </Button>
    </div>
  );
};

export default Pagination;
