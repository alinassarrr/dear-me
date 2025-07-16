import "./Tag.css";
const Tag = ({ text, onClick }) => {
  return (
    <div className="tag" onClick={onClick}>
      {text} x
    </div>
  );
};

export default Tag;
