import "./Dropdown.css";
const Dropdown = (props) => {
  const { id, onChange, value, options } = props;
  return (
    <select id={id} onChange={onChange} value={value}>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};
export default Dropdown;
