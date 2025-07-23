import React from "react";
import InputField from "../../Common/Input/InputField";

const TitleDate = ({ capsuleTitle, revealDate, setData, form }) => {
  return (
    <div className="title-date row">
      <InputField
        className="input1"
        title="Capsule Title"
        type="text"
        id="title"
        placeholder="My future self..."
        value={capsuleTitle}
        onChange={(e) => {
          setData({ ...form, title: e.target.value });
        }}
      />

      <InputField
        className="input2"
        title="Reveal Date"
        type="datetime-local"
        id="date"
        value={revealDate}
        onChange={(e) => {
          const rawDateTime = e.target.value;
          const mysqlFormat = rawDateTime.replace("T", " ") + ":00";
          setData({ ...form, reveal_at: mysqlFormat });
          console.log(e.target.value);
        }}
        min={new Date().toISOString().slice(0, 16)}
      />
    </div>
  );
};

export default TitleDate;
