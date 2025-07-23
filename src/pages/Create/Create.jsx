import "./Create.css";
import Button from "../../components/Common/Button/Button";
import TitleDate from "../../components/Create/TitleDate/TitleDate";
import TextArea from "../../components/Create/TextArea/TextArea";
import EmojiPrivacy from "../../components/Create/EmojiPrivacy/EmojiPrivacy";
import TagMood from "../../components/Create/TagMood/TagMood";
import AttachmentBlock from "../../components/Create/Attachments/AttachmentBlock";
import { useCreateLogic } from "./CreateLogic";

const Create = () => {
  const [formData, setFormData, create, clear, loading, missing] =
    useCreateLogic();

  return (
    <div className="create-form form-container">
      <form action="">
        {/* Section title */}
        <div className="title">
          <div className="title-icon">
            <img src="icons/Create/hourglass.svg" alt="" />
          </div>
          <h3 className="sec-title"> Create Your Time Capsule</h3>
        </div>
        <div className="content">
          {/* Title - Date Block */}
          <TitleDate
            capsuleTitle={formData.title}
            setData={setFormData}
            revealDate={formData.reveal_at}
            form={formData}
          />
          {/*TextArea */}
          <TextArea
            setData={setFormData}
            message={formData.message}
            form={formData}
          />
          {/*Emoji - Privacy Block */}
          <EmojiPrivacy form={formData} setData={setFormData} />
          {/*Tag - Mood Block */}
          <TagMood form={formData} setData={setFormData} />
          {/*AttachmentBlock */}
          <AttachmentBlock form={formData} setData={setFormData} />
        </div>
        {/*Surpise check */}
        <div className="surprise">
          <input
            className="checkbox"
            type="checkbox"
            id="surprise"
            checked={formData.surprise}
            onChange={(e) => {
              setFormData({ ...formData, surprise: e.target.checked });
              console.log(e.target.checked);
            }}
          />
          <label htmlFor="surprise">Surprise Mode </label>
        </div>
        <div className="location">
          <img src="icons/Create/map-pin.svg" alt="location" />
          <p>
            Location and IP address will be automatically captured for this
            capsule
          </p>
        </div>
        {/* Form Buttons */}
        <div className="form-buttons">
          <Button text="Clear" onClick={clear} className={"button-clear"} />
          <Button
            text="Create time capsule"
            onClick={create}
            className={"button-dark"}
            disabled={loading}
          />
        </div>
        {missing && <div className="toast error">{missing}</div>}
      </form>
    </div>
  );
};

export default Create;
