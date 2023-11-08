const Error = ({ message }) => {
  return (
    <div className="mx-auto max-w-[280px] mt-4 -mb-4 text-center flex justify-center">
      <p className="text-[var(--color-dark)]">{message}</p>
    </div>
  );
};

export default Error;
