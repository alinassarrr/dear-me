import React, { useState } from "react";
import Tag from "../../Common/Tags/Tag";
import Dropdown from "../../Common/Dropdown/Dropdown";
const moodOptions = [
  { value: 1, text: "😊 Happy & Content" },
  { value: 2, text: "😢 Sad & Reflective" },
  { value: 3, text: "🤩 Excited & Inspired" },
  { value: 4, text: "😌 Peaceful & Calm" },
  { value: 5, text: "🤔 Thoughtful & Curious" },
];
const TagMood = ({ form, setData }) => {
  const [tagInput, setTagInput] = useState("");
  const addTag = () => {
    if (tagInput.trim()) {
      setData({ ...form, tags: [...form.tags, tagInput.trim()] });
      setTagInput("");
    }
  };
  const removeTag = (index) => {
    const newTag = [...form.tags];
    newTag.splice(index, 1);
    setData({ ...form, tags: newTag });
  };

  return (
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
          {form.tags.map((tag, index) => (
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
        <Dropdown
          id="mood"
          value={form.mood_id}
          onChange={(e) => setData({ ...form, mood_id: e.target.value })}
          options={moodOptions}
        />
      </div>
    </div>
  );
};

export default TagMood;
