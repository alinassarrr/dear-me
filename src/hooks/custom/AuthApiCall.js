import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthApi = () => {
  const path = import.meta.env.VITE_BASE_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, [token, navigate]);

  return [path, token, navigate, user];
};
