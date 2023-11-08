const Loader = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="animate-spin h-10 w-10 border-4 border-b-transparent border-[var(--color-violet)] rounded-full"></div>
      <p className="text-xl text-[var(--color-violet)]">Loading</p>
    </div>
  );
};

export default Loader;
