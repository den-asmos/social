const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className = '',
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`py-2 px-4 border border-[var(--color-light)] rounded-md shadow-sm focus:outline-none focus:border-[var(--color-violet)] w-full ${className}`}
      value={value}
      onChange={onChange}
      required={true}
    />
  );
};

export default Input;
