import { useState } from "react";
import Dropdown from "../../Common/Dropdown/Dropdown";

const securityOptions = [
  { value: "private", text: "🔒 Private - Only You" },
  { value: "public", text: "🌍 Public - Everyone" },
  { value: "unlisted", text: "🔗 Unlisted -Sharable Link" },
];
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

const EmojiPrivacy = ({ setData, form }) => {
  const [selectedEmojiText, setSelectedEmojiText] = useState("");
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
    setData({ ...form, emoji: e.emoji });
    setSelectedEmojiText(e.value);
    target.classList.add("selected");
  };

  return (
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
        <Dropdown
          id="security"
          onChange={(e) => setData({ ...form, security: e.target.value })}
          value={form.security}
          options={securityOptions}
        />
      </div>
    </div>
  );
};

export default EmojiPrivacy;
