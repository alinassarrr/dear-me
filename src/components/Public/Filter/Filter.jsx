import React from "react";
import Dropdown from "../../Common/Dropdown/Dropdown";
import "./Filter.css";

const countryOption = [
  { value: "", text: "All Countries" },
  { value: "United States", text: "United States" },
  { value: "Lebanon", text: "Lebanon" },
  { value: "France", text: "France" },
  { value: "Spain", text: "Spain" },
];
const moodOptions = [
  { value: "", text: "All Moods" },
  { value: "happy", text: "😊 Happy & Content" },
  { value: "sad", text: "😢 Sad & Reflective" },
  { value: "excited", text: "🤩 Excited & Inspired" },
  { value: "calm", text: "😌 Peaceful & Calm" },
  { value: "thoughtful", text: "🤔 Thoughtful & Curious" },
];
const Filter = ({
  setCountry,
  country,
  setMood,
  mood,
  show,
  setShow,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="filters">
      <Dropdown
        id="country-select"
        options={countryOption}
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <Dropdown
        id="mood-select"
        options={moodOptions}
        onChange={(e) => setMood(e.target.value)}
        value={mood}
      />
      <div className="custom-select">
        <div className="filter" onMouseOver={() => setShow(!show)}>
          Select Time Range
        </div>
        {show ? (
          <div className="filter-dropdown" onMouseLeave={() => setShow(!show)}>
            <label htmlFor="start">
              Start Date:
              <input
                type="date"
                id="start"
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                value={startDate}
              />
            </label>
            <label htmlFor="end">
              End Date:
              <input
                type="date"
                id="end"
                max={new Date().toISOString().split("T")[0]}
                defaultValue={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
