const Button = ({
  children,
  type = 'button',
  width = 'fit',
  margin = '',
  onClick,
  disabled = false,
  invert = false,
  className = '',
}) => {
  const color = invert
    ? 'bg-white text-[var(--color-violet)] border border-[var(--color-light)] enabled:hover:bg-[var(--color-light)] enabled:hover:text-white'
    : 'bg-[var(--color-violet)] text-white enabled:hover:bg-[var(--color-light)] enabled:hover:text-[var(--color-violet)]';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${margin} py-2 px-4 rounded-md ${color} duration-200 ease-in-out ${className} disabled:opacity-50`}
      style={{ width: width }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
