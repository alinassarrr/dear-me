import { useState } from "react";
import "./Create.css";
import Button from "../../components/Common/Button/Button";
import { useNavigate } from "react-router-dom";
import TitleDate from "../../components/Create/TitleDate/TitleDate";
import TextArea from "../../components/Create/TextArea/TextArea";
import EmojiPrivacy from "../../components/Create/EmojiPrivacy/EmojiPrivacy";
import TagMood from "../../components/Create/TagMood/TagMood";
import AttachmentBlock from "../../components/Create/Attachments/AttachmentBlock";
import axios from "axios";
const path = import.meta.env.VITE_BASE_URL;

const Create = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    reveal_at: "",
    message: "",
    emoji: "",
    security: "private",
    mood_id: 1,
    tags: [],
    surprise: false,
    image_path: null,
    audio_path: null,
    file_path: null,
  });

  const create = async () => {
    for (let key in formData) {
      if (
        key !== "image_path" &&
        key !== "audio_path" &&
        key !== "file_path" &&
        key !== "surprise"
      ) {
        if (!formData[key] || !formData[key].length) {
          console.log("Still missing", key);
          return;
        }
      }
    }
    const finalData = {
      ...formData,
      tags: JSON.stringify(formData.tags),
    };

    try {
      const response = await axios.post(`${path}/create/`, finalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    // clear();
    // navigate("/public");
  };

  return (
    <div className="create-form form-container">
      <form action="">
        <div className="title">
          <div className="title-icon">
            <img src="icons/Create/hourglass.svg" alt="" />
          </div>
          <h3 className="sec-title"> Create Your Time Capsule</h3>
        </div>
        <div className="content">
          <TitleDate
            capsuleTitle={formData.title}
            setData={setFormData}
            revealDate={formData.reveal_at}
            form={formData}
          />
          <TextArea
            setData={setFormData}
            message={formData.message}
            form={formData}
          />
          <EmojiPrivacy form={formData} setData={setFormData} />

          <TagMood form={formData} setData={setFormData} />

          <AttachmentBlock form={formData} setData={setFormData} />
        </div>
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
        <div className="form-buttons">
          <Button
            text="Clear"
            // onClick={clear}
            className={"button-clear"}
          />
          <Button
            text="Create time capsule"
            onClick={create}
            className={"button-dark"}
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
