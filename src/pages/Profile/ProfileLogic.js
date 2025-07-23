import React, { useEffect, useState } from "react";
import { useAuthApi } from "../../hooks/custom/AuthApiCall";
import axios from "axios";

export const useProfileLogic = () => {
  const [path, token, navigate, user] = useAuthApi();

  const username = user.username;
  const email = user.email;
  const [capsules, setCapsules] = useState([]);
  const [total, setTotal] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [waiting, setWaiting] = useState(0);

  useEffect(() => {
    userCapsules();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signup");
  };

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

  return [
    username,
    email,
    capsules,
    total,
    revealed,
    waiting,
    navigate,
    logout,
  ];
};
