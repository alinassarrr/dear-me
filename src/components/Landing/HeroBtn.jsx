import { Link } from "react-router-dom";
import "./HeroBtn.css";

const HeroBtn = (props) => {
  return (
    <Link className="hero-btn" to={props.to}>
      {props.text}
    </Link>
  );
};

export default HeroBtn;
