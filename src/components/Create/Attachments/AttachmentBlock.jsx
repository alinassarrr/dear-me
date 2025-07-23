import React from "react";
import AttachmentBtn from "./AttachmentBtn";

const AttachmentBlock = ({ form, setData }) => {
  // https://codezup.com/convert-pdf-file-to-base64-encoding-in-react/
  const convertToBase64 = (file, path) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setData({ ...form, [path]: reader.result });
    };
    reader.onerror = (err) => {
      console.error("Base64 Error", err);
    };
  };

  const attachChange = (e, attached) => {
    if (e.target.files && e.target.files.length > 0) {
      convertToBase64(e.target.files[0], attached);
    }
  };

  return (
    <div className="attachment-container">
      <label>Attachments (Optional)</label>
      <div className="attachments">
        <AttachmentBtn
          src="icons/Create/upload.svg"
          text="Upload Image"
          accept="image/*"
          onChange={(e) => attachChange(e, "image_path")}
          data={form.image_path}
        />
        <AttachmentBtn
          src="icons/Create/mic.svg"
          text="Record Audio"
          accept="audio/*"
          onChange={(e) => attachChange(e, "audio_path")}
          data={form.audio_path}
        />
        <AttachmentBtn
          src="icons/Create/file-code.svg"
          text="Markdown Note"
          accept=".xml,.html,.md"
          onChange={(e) => attachChange(e, "file_path")}
          data={form.file_path}
        />
      </div>
    </div>
  );
};

export default AttachmentBlock;
