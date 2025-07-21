import { useEffect, useState } from "react";
import Tag from "../Tags/Tag";
import "./CapsuleCard.css";
const CapsuleCard = ({ capsuleData }) => {
  const {
    id,
    emoji,
    message,
    mood,
    revealed,
    reveal_at,
    security,
    tags,
    title,
    user,
    location,
    created_at,
  } = capsuleData;

  const [timer, setTimer] = useState("");
  const [isRevealed, setIsRevealed] = useState(revealed);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(countDown(reveal_at));
    }, 1000);

    return () => clearInterval(interval); // clear interval on unmount
  }, [reveal_at]);

  const countDown = (reveal_at) => {
    const reveal = new Date(reveal_at.replace(" ", "T"));
    const now = new Date();

    const diff = reveal - now;
    if (diff <= 0) {
      setIsRevealed(true);
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const format = (date) => {
    const formatedDate = date.split(/[ T]/);
    return { date: formatedDate[0], time: formatedDate[1] };
  };
  return (
    <div className="capsule-card">
      {!isRevealed ? (
        <>
          <div className="lock">
            <div className="icon-container">
              <img src="icons/Profile/lock-keyhole.svg" alt="lock" />
            </div>
          </div>
          <div className="bottom">
            <div className="location">
              <div className="icon">
                <img src="icons/Profile/hourglass.svg" alt="location" />
              </div>
              <p>Countdown</p>
            </div>
            <div className="created">
              <p>{countDown(reveal_at)}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="top">
            <div className="left-right">
              <div className="left">
                <div className="emoji-title">
                  <div className="emoji">{emoji}</div>
                  <div className="title-owner">
                    <h3>{title}</h3>
                    <p>By: {user}</p>
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
                  <p>{format(reveal_at).date}</p>
                </div>
              </div>
            </div>
            <div className="tags">
              {tags.map((tag) => (
                <Tag text={tag} stable={true} />
              ))}
            </div>
          </div>

          <div className="message">
            <p>{message}</p>
          </div>
          <div className="bottom">
            <div className="location">
              <div className="icon">
                <img src="icons/Create/map-pin.svg" alt="location" />
              </div>
              <p>{location}</p>
            </div>
            <div className="created">
              <div className="icon">
                <img src="icons/Capsule/createdAt.svg" alt="created at" />
              </div>
              <p>created: {format(created_at).date}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CapsuleCard;
