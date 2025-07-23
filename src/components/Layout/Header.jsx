import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const token = JSON.parse(user)?.token;
      if (token) {
        setLoggedIn(true);
      }
    }
  }, []);

  const buttons = [
    { text: "Home", to: "/", id: "home" },
    { text: "Create", to: "/create", id: "create" },
    { text: "Public Wall", to: "/public", id: "public" },
    loggedIn
      ? { text: "Profile", to: "/profile", id: "profile" }
      : { text: "SignUp", to: "/signup", id: "signup" },
  ];

  return (
    <header className="container">
      <div className="logo">DearMe</div>
      <nav>
        <ul>
          {buttons.map((btn) => {
            const isActive = location.pathname === btn.to;
            return (
              <li key={btn.id}>
                <Link
                  id={btn.id}
                  className={`nav-btn ${isActive ? "active" : ""}`}
                  to={btn.to}
                >
                  {btn.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
