import "./Button.css";
const Button = ({ text, onClick, className, disabled = false }) => {
  return (
    <button
      className={`button + ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(onClick);
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
