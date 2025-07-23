import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Common/Dropdown/Dropdown";
import "./Public.css";
import Filter from "../../components/Public/Filter/Filter";
import CapsuleCard from "../../components/Common/CapsuleCard/CapsuleCard";
import axios from "axios";
import CapsuleModal from "../../components/Common/Modal/CapsuleModal";
import { useNavigate } from "react-router-dom";

const path = import.meta.env.VITE_BASE_URL;

const Public = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, [token, navigate]);

  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");
  const [mood, setMood] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [capsules, setCapsules] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [totalCapsules, setTotalCapsules] = useState("");
  const [totalFiltered, setTotalFiltered] = useState("");

  useEffect(() => {
    publicCapsules();
  }, [startDate, endDate]);

  useEffect(() => {
    setTotalFiltered(filtered.length);
  }, [filtered]);

  useEffect(() => {
    filterCapsules();
  }, [mood, country]);

  const publicCapsules = async () => {
    const response = await axios.post(
      `${path}/public-wall`,
      {
        start: startDate,
        end: endDate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCapsules(response.data.data);
    setTotalCapsules(response.data.data.length);
    setFiltered(response.data.data);
    console.log(response.data.data);
  };

  const filterCapsules = () => {
    const filtered = capsules.filter((cap) => {
      const moodFilter = mood ? cap.mood == mood : true;
      const locationFilter = country ? cap.location === country : true;
      return moodFilter && locationFilter;
    });
    setFiltered(filtered);
    console.log(filtered);
  };
  return (
    <div className="public-capsule container">
      <div className="title">
        <h3 className="sec-title">🌐 Public Time Capsule Wall</h3>
        <p>
          Discover messages from around the world that have been unlocked and
          shared publicly
        </p>
      </div>
      <section className="filter-section">
        <Filter
          setCountry={setCountry}
          country={country}
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
      <div className="results">
        <p>
          Showing {totalFiltered} of {totalCapsules} public capsules
        </p>
      </div>
      <section className="capsules-list">
        {totalFiltered ? (
          filtered.map((cap) => <CapsuleCard capsuleData={cap} key={cap.id} />)
        ) : (
          <div>Nothing to show</div>
        )}
      </section>
    </div>
  );
};
export default Public;
