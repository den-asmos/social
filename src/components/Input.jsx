const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="py-2 px-4 border border-[var(--color-violet)] rounded-md shadow-sm focus:outline-none w-full"
      value={value}
      onChange={onChange}
      required={true}
    />
  );
};

export default Input;
