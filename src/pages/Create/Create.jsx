import { useEffect, useState } from "react";
import select from "../../custom/navSelect";
import "./Create.css";
import AttachmentBtn from "../../components/Create/Attachments/AttachmentBtn";
import InputField from "../../components/Common/Input/InputField";
import Button from "../../components/Common/Button/Button";
import Tag from "../../components/Common/Tags/Tag";

const Create = () => {
  const emojis = [
    { emoji: "🎯", value: "Focused Goal" },
    { emoji: "⭐", value: "Achievement" },
    { emoji: "❤️", value: "Love & Emotion" },
    { emoji: "🚀", value: "Ambition & Growth" },
    { emoji: "🎭", value: "Life Drama" },
    { emoji: "💎", value: "Treasure & Value" },
    { emoji: "💭", value: "Dreams & Thoughts" },
    { emoji: "📅", value: "Marked Moment" },
    { emoji: "🛤️", value: "Personal Journey" },
    { emoji: "🧭", value: "Direction & Purpose" },
    { emoji: "🧠", value: "Memory & Mind" },
    { emoji: "🌠", value: "Wish & Hope" },
    { emoji: "📸", value: "Captured Memory" },
    { emoji: "💡", value: "Inspiration" },
  ];

  const [capsuleTitile, setcapsuleTitile] = useState("");
  const [revealDate, setRevealDate] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedEmojiText, setSelectedEmojiText] = useState("");
  const [security, setsecurity] = useState("private");
  const [tags, setTags] = useState([]);
  const [mood, setMood] = useState("happy");
  const [tagInput, setTagInput] = useState("");
  const [capsules, setCapsules] = useState([]);

  const clear = () => {
    setcapsuleTitile("");
    setRevealDate("");
    setMessage("");
    setSelectedEmoji("");
    setsecurity("private");
    setTags([]);
    setMood("happy");
    resetEmoji();
  };

  const resetEmoji = () => {
    const all = document.querySelectorAll(".emoji");
    all.forEach((emoji) => {
      emoji.classList.remove("selected");
    });
    setSelectedEmojiText("");
  };
  const selectEmoji = (e, target) => {
    // console.log(e.emoji, target);
    resetEmoji();
    setSelectedEmoji(e.emoji);
    setSelectedEmojiText(e.value);
    target.classList.add("selected");
  };

  const addTag = () => {
    if (tagInput) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };
  const removeTag = (index) => {
    const newTag = [...tags];
    newTag.splice(index, 1);
    setTags(newTag);
  };

  useEffect(() => {
    select("create");
  }, []);

  const create = () => {
    const newCapsule = {
      capsuleTitile,
      revealDate,
      message,
      selectedEmoji,
      security,
      tags,
      mood,
    };
    for (let value in newCapsule) {
      if (!newCapsule[value] || !newCapsule[value].length) {
        console.log("Still missing", value);
        return;
      }
    }
    setCapsules([...capsules, newCapsule]);
    clear();
  };

  useEffect(() => {
    console.log(capsules);
  }, [capsules.length]);

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
          <div className="title-date row">
            <InputField
              className="input1"
              title="Capsule Title"
              type="text"
              id="title"
              placeholder="My future self..."
              value={capsuleTitile}
              onChange={(e) => {
                setcapsuleTitile(e.target.value);
              }}
            />

            <InputField
              className="input2"
              title="Reveal Date"
              type="datetime-local"
              id="date"
              value={revealDate}
              onChange={(e) => {
                setRevealDate(e.target.value);
              }}
            />
          </div>

          <div className="message">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write a message to your future self or to the world..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div className="emojis-privacy row">
            <div className="input1">
              <div className="head">
                <label htmlFor="">Choose Emoji</label>
                <p>{selectedEmojiText}</p>
              </div>
              <div className="emojis">
                {emojis.map((e, index) => (
                  <div
                    key={index}
                    className="emoji"
                    onClick={(event) => {
                      selectEmoji(e, event.currentTarget);
                    }}
                  >
                    {e.emoji}
                  </div>
                ))}
              </div>
            </div>
            <div className="privacy input2">
              <label htmlFor="">Privacy Settings</label>
              <select
                name="security"
                id="security"
                onChange={(e) => setsecurity(e.target.value)}
                value={security}
              >
                <option name="status" value="private">
                  🔒 Private - Only You
                </option>
                <option name="status" value="public">
                  🌍 Public - Everyone
                </option>
                <option name="status" value="unlisted">
                  🔗 Unlisted -Sharable Link
                </option>
              </select>
            </div>
          </div>
          <div className="tags-mood row">
            <div className="tags input1">
              <label htmlFor="tag">Tags</label>
              <div className="tag-comb">
                <input
                  type="text"
                  id="tag"
                  value={tagInput}
                  placeholder="Add a tag..."
                  onChange={(e) => {
                    setTagInput(e.target.value);
                  }}
                />
                <button
                  className="tag-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    addTag();
                  }}
                >
                  <img src="icons/Create/tag.svg" alt="" />
                </button>
              </div>
              <div className="tags-list">
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    text={tag}
                    onClick={() => {
                      removeTag(index);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mood input2">
              <label htmlFor="mood">Mood</label>
              <select
                name="mood-selection"
                id="mood"
                onChange={(e) => setMood(e.target.value)}
                value={mood}
              >
                <option value="happy">😊 Happy & Content</option>
                <option value="sad">😢 Sad & Reflective</option>
                <option value="excited">🤩 Excited & Inspired</option>
                <option value="calm">😌 Peaceful & Calm</option>
                <option value="thoughtful">🤔 Thoughtful & Curious</option>
              </select>
            </div>
          </div>
          <div className="attachment-container">
            <label>Attachments (Optional)</label>
            <div className="attachments">
              <AttachmentBtn
                src="icons/Create/upload.svg"
                text="Upload Image"
              />
              <AttachmentBtn src="icons/Create/mic.svg" text="Record Audio" />
              <AttachmentBtn
                src="icons/Create/file-code.svg"
                text="Add Text Note"
              />
            </div>
          </div>
          {/* <div className="additional">
            <textarea name="" id=""></textarea>
          </div> */}
          <div className="location">
            <img src="icons/Create/map-pin.svg" alt="location" />
            <p>
              Location and IP address will be automatically captured for this
              capsule
            </p>
          </div>
        </div>
        <div className="form-buttons">
          <Button text="Clear" onClick={clear} className={"button-clear"} />
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
