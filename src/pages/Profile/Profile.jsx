import Button from "../../components/Common/Button/Button";
import "./Profile.css";
import CapsuleCard from "../../components/Common/CapsuleCard/CapsuleCard";
import { useProfileLogic } from "./ProfileLogic";

const Profile = () => {
  const [username, email, capsules, total, revealed, waiting] =
    useProfileLogic();
  return (
    <div className="profile container">
      <section className="user-section">
        <div className="name-email">
          <p className="name">Welcome {username}</p>
          <p>email: {email}</p>
        </div>
        <div className="stats">
          <div className="total">
            <p className="number">{total}</p>
            <p className="text">Capsules Created</p>
          </div>
          <div className="total">
            <div className="number">{revealed}</div>
            <p className="text">Capsules Revealed</p>
          </div>
          <div className="total">
            <div className="number">{waiting}</div>
            <p className="text">Waiting to Reveal</p>
          </div>
        </div>
        <div className="actions">
          <Button text="+ New Capsule" className={"button-dark"} />
          <Button text="Edit Profile" className={"button-clear"} />
        </div>
      </section>
      <section className="capsules-list">
        {capsules.length ? (
          capsules.map((cap) => <CapsuleCard capsuleData={cap} key={cap.id} />)
        ) : (
          <div>NO DATA YET</div>
        )}
      </section>
    </div>
  );
};

export default Profile;
