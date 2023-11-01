const Button = ({
  children,
  type = 'button',
  width = 'fit',
  onClick,
  invert = false,
}) => {
  const color = invert
    ? 'bg-white text-[var(--color-violet)] border border-[var(--color-light)] hover:bg-[var(--color-light)] hover:text-white'
    : 'bg-[var(--color-violet)] text-white hover:bg-[var(--color-light)] hover:text-[var(--color-violet)]';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-md ${color} duration-200 ease-in-out`}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};

export default Button;
