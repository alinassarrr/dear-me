import "./AttachmentBtn.css";
const AttachmentBtn = (props) => {
  return (
    <button
      className="attach"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className="attach-icon">
        <img src={props.src} alt="" />
      </div>
      <p>{props.text}</p>
    </button>
  );
};

export default AttachmentBtn;
