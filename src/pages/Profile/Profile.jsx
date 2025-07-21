import React, { useEffect, useState } from "react";
import Button from "../../components/Common/Button/Button";
import "./Profile.css";
import CapsuleCard from "../../components/Common/CapsuleCard/CapsuleCard";
import axios from "axios";
const path = import.meta.env.VITE_BASE_URL;

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.username);
  const token = user.token;
  const username = user.username;
  const email = user.email;
  const [capsules, setCapsules] = useState([]);
  const [total, setTotal] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [waiting, setWaiting] = useState(0);

  useEffect(() => {
    userCapsules();
  }, []);

  const userCapsules = async () => {
    try {
      const response = await axios.get(`${path}/profile/my-capsules`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allCaps = response.data.data;
      setCapsules(allCaps);
      setTotal(allCaps.length);
      const revealed = allCaps.filter((cap) => cap.revealed);
      // console.log(revealed);
      setRevealed(revealed.length);
      setWaiting(allCaps.length - revealed.length);
    } catch (error) {
      console.log("Error fetching capsules:", error);
    }
  };

  return (
    <div className="profile container">
      <section className="user-section">
        <div className="name-email">
          <p className="name">Welcome {username}</p>
          <p>email: {email}</p>
        </div>
        <div className="stats">
          <div className="total">
            <p className="number">{total}</p>
            <p className="text">Capsules Created</p>
          </div>
          <div className="total">
            <div className="number">{revealed}</div>
            <p className="text">Capsules Revealed</p>
          </div>
          <div className="total">
            <div className="number">{waiting}</div>
            <p className="text">Waiting to Reveal</p>
          </div>
        </div>
        <div className="actions">
          <Button text="+ New Capsule" className={"button-dark"} />
          <Button text="Edit Profile" className={"button-clear"} />
        </div>
      </section>
      <section className="capsules-list">
        {capsules.length ? (
          capsules.map((cap) => <CapsuleCard capsuleData={cap} key={cap.id} />)
        ) : (
          <div>NO DATA YET</div>
        )}
      </section>
    </div>
  );
};

export default Profile;
