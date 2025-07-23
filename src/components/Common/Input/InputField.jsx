import "./InputField.css";
const InputField = (props) => {
  const { title, type, id, placeholder, className, onChange, value, ...rest } =
    props;
  return (
    <div className={className}>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default InputField;
