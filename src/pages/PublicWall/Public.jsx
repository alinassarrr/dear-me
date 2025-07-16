import React, { useEffect, useState } from "react";
import select from "../../custom/navSelect";
import Dropdown from "../../components/Common/Dropdown/Dropdown";
import "./Public.css";
import Filter from "../../components/Public/Filter/Filter";
const Public = () => {
  useEffect(() => {
    select("public");
  }, []);

  const countryOption = [
    { value: null, text: "All Countries" },
    { value: "US", text: "United States" },
    { value: "LB", text: "Lebanon" },
  ];
  const moodOptions = [
    { value: null, text: "All Moods" },
    { value: "happy", text: "😊 Happy & Content" },
    { value: "sad", text: "😢 Sad & Reflective" },
    { value: "excited", text: "🤩 Excited & Inspired" },
    { value: "calm", text: "😌 Peaceful & Calm" },
    { value: "thoughtful", text: "🤔 Thoughtful & Curious" },
  ];

  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");
  const [mood, setMood] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  return (
    <div className="public-capsule container">
      <div className="title">
        <h3 className="sec-title">Public Time Capsule Wall</h3>
        <p>
          Discover messages from around the world that have been unlocked and
          shared publicly
        </p>
      </div>
      <section className="filter-section">
        <Filter
          countryOption={countryOption}
          setCountry={setCountry}
          country={country}
          moodOptions={moodOptions}
          setMood={setMood}
          mood={mood}
          show={show}
          setShow={setShow}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </section>
      <section className="capsules-list"></section>
    </div>
  );
};

export default Public;
