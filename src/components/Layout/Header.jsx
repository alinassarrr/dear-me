import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const loggedIn = false;
  const buttons = [
    { text: "Home", to: "/", id: "home" },
    { text: "Create", to: "/create", id: "create" },
    { text: "Public Wall", to: "/public", id: "public" },
    loggedIn
      ? { text: "Profile", to: "/profile", id: "profile" }
      : { text: "SignUp", to: "/login", id: "login" },
  ];
  return (
    <header className="container">
      <div className="logo">DearMe</div>
      <nav>
        <ul>
          {buttons.map((btn) => {
            return (
              <li key={btn.id}>
                {btn.id === "home" ? (
                  <Link id={btn.id} className="nav-btn active" to={btn.to}>
                    {btn.text}
                  </Link>
                ) : (
                  <Link id={btn.id} className="nav-btn" to={btn.to}>
                    {btn.text}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
