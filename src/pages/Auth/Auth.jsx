import { useEffect, useState } from "react";
import LogIn from "../../components/Auth/LogIn";
import SignUp from "../../components/Auth/SignUp";
import "./Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [form, setForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const token = JSON.parse(user).token;
      if (token) {
        navigate("/");
      }
    }
  }, []);

  const onLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/guest/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
      window.location.reload();
    } catch (error) {
      const message = error.response.data.message;
      message ? setError(message) : setError(error.response.data.data);
    }
    setLoading(false);
  };

  const onSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      if (confirmPassword !== password) {
        setError("Confirm password doesn't match");
        setLoading(false);
        return;
      }
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/guest/register",
        {
          email,
          password,
          username,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
      window.location.reload();
    } catch (error) {
      const message = error.response.data.message;
      message ? setError(message) : setError(error.response.data.data);
    }
    setLoading(false);
  };

  const toggleForm = () => {
    setForm(!form);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
  };

  return (
    <>
      {error && <div className="toast error">{error}</div>}
      {loading && <div className="toast">Loading...</div>}
      <div className="auth container">
        {form ? (
          <LogIn
            onToggle={toggleForm}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={onLogin}
          />
        ) : (
          <SignUp
            onToggle={toggleForm}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            username={username}
            setUsername={setUsername}
            onSubmit={onSignIn}
          />
        )}
      </div>
    </>
  );
};

export default Auth;
