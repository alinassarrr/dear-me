import { useEffect, useState } from "react";
import select from "../hooks/navSelect";
import "./Create.css";
import InputField from "../components/Create/InputField";

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
  const [security, setsecurity] = useState("");
  const [tags, setTags] = useState([]);
  const [mood, setMood] = useState("");
  const [tagInput, setTagInput] = useState("");

  const selectEmoji = (text, target) => {
    console.log(text, target);
    const all = document.querySelectorAll(".emoji");
    all.forEach((emoji) => {
      emoji.classList.remove("selected");
    });
    setSelectedEmoji(text);
    target.classList.add("selected");
  };

  const addTag = () => {
    if (tagInput) {
      setTags([...tags, tagInput]);
    }
  };

  useEffect(() => {
    select("create");
  }, []);

  return (
    <div className="create-form form-container">
      <form action="">
        <div className="title">
          <img src="icons/Create/hourglass.svg" alt="" />
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
                <p>{selectedEmoji}</p>
              </div>
              <div className="emojis">
                {emojis.map((e) => (
                  <div
                    className="emoji"
                    onClick={(event) => {
                      selectEmoji(e.value, event.currentTarget);
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
                value={security}
                onChange={(e) => setsecurity(e.target.value)}
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
              <div className="tags"></div>
            </div>
            <div className="mood input2">
              <label htmlFor="tag">Mood</label>
              <select
                name="mood-selection"
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              >
                <option value="happy">😊 Happy & Content</option>
                <option value="sad">😢 Sad & Reflective</option>
                <option value="excited">🤩 Excited & Inspired</option>
                <option value="calm">😌 Peaceful & Calm</option>
                <option value="thoughtful">🤔 Thoughtful & Curious</option>
              </select>
            </div>
          </div>
          <div className="attachments">
            {/*
             1
            2
            3 */}
          </div>
          <div className="additional">
            <textarea name="" id=""></textarea>
          </div>
          <div className="location"></div>
        </div>
        <div className="buttons"></div>
      </form>
    </div>
  );
};

export default Create;
