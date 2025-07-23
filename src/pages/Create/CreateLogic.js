import React, { useEffect, useState } from "react";
import { useAuthApi } from "../../hooks/custom/AuthApiCall";
import axios from "axios";

export const useCreateLogic = () => {
  const form = {
    title: "",
    reveal_at: "",
    message: "",
    emoji: "",
    security: "private",
    mood_id: 1,
    tags: [],
    surprise: false,
    image_path: null,
    audio_path: null,
    file_path: null,
  };
  const [path, token, navigate] = useAuthApi();

  const [formData, setFormData] = useState(form);
  const [loading, setLoading] = useState(false);
  const [missing, setMissing] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMissing("");
    }, 1000);
  }, [missing]);

  const clear = () => {
    setFormData(form);
  };
  const create = async () => {
    for (let key in formData) {
      if (
        key !== "image_path" &&
        key !== "audio_path" &&
        key !== "file_path" &&
        key !== "surprise" &&
        key !== "mood_id"
      ) {
        if (!formData[key] || !formData[key].length) {
          setMissing(`Still missing ${key}`);
          return;
        }
      }
    }
    const finalData = {
      ...formData,
      tags: JSON.stringify(formData.tags),
    };
    console.log("Submitting reveal_at:", formData.reveal_at);
    setLoading(true);
    try {
      const response = await axios.post(`${path}/create/`, finalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setLoading(false);
    } catch (e) {
      console.log("Error: ", e);
      setLoading(false);
    }
    clear();
    navigate("/profile");
  };

  return [formData, setFormData, create, clear, loading, missing];
};
