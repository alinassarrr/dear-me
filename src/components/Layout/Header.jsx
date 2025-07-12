import { Link } from "react-router-dom";
import "./Header.css";
import Login from "../../pages/Login";
const Header = () => {
  const loggedIn = false;
  return (
    <header className="container">
      <div className="logo">DearMe</div>
      <nav>
        <ul>
          <li>
            <Link className="active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link>Create</Link>
          </li>
          <li>
            <Link>Pulic Wall</Link>
          </li>
          <li>
            {loggedIn ? (
              <Link>Profile</Link>
            ) : (
              <Link to={"/login"}>SignUp</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
