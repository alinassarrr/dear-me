import "./AttachmentBtn.css";
const AttachmentBtn = (props) => {
  const { src, text, accept, onChange, data } = props;

  return (
    <label className="attach">
      <input
        type="file"
        accept={accept}
        className="hidden-input"
        onChange={onChange}
      />
      <div className="attach-icon">
        {!data ? (
          <>
            <img src={src} alt={src} />
            <p>{text}</p>
          </>
        ) : accept === "image/*" ? (
          <img src={data} alt={data} className="full-img" />
        ) : // <audio src={data} controls />
        accept === "audio/*" ? (
          <audio src={data} controls className="audio" />
        ) : (
          <>
            <p className="uploaded">File Uploaded!</p>
          </>
        )}
      </div>
    </label>
  );
};

export default AttachmentBtn;
