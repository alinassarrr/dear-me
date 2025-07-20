import "./Tag.css";
const Tag = ({ text, onClick, stable }) => {
  return (
    <div className="tag" onClick={onClick}>
      #{!stable ? <>{text} x </> : <>{text}</>}
    </div>
  );
};

export default Tag;
