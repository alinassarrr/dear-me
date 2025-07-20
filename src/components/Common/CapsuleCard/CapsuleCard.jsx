import Tag from "../Tags/Tag";
import "./CapsuleCard.css";
const CapsuleCard = () => {
  return (
    <div className="capsule-card">
      <div className="top">
        <div className="left-right">
          <div className="left">
            <div className="emoji-title">
              <div className="emoji">🎯</div>
              <div className="title-owner">
                <h3>Capsule Title</h3>
                <p>By: Capsule Owner</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="icon-date">
              <img
                src="icons/Capsule/calendar.svg"
                className="icon"
                alt="calendar"
              />
              <p>11/08/2025</p>
            </div>
          </div>
        </div>
        <div className="tags">
          <Tag text="tag1" stable={true} />
          <Tag text="tag1" stable={true} />
          <Tag text="tag1" stable={true} />
        </div>
      </div>

      <div className="message">
        <p>Your message</p>
      </div>
      <div className="bottom">
        <div className="location">
          <div className="icon">
            <img src="icons/Create/map-pin.svg" alt="location" />
          </div>
          <p>United States</p>
        </div>
        <div className="created">
          <div className="icon">
            <img src="icons/Capsule/createdAt.svg" alt="created at" />
          </div>
          <p>created: 11/01/2024</p>
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;
