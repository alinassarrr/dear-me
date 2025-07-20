import React from "react";
import Dropdown from "../../Common/Dropdown/Dropdown";
import "./Filter.css";
const Filter = ({
  countryOption,
  setCountry,
  country,
  moodOptions,
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
      {/* <Dropdown id="country-select" options={countries} /> */}
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
            <button className="save">Save</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
