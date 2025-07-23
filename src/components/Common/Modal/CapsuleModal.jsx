import Tag from "../Tags/Tag";
import "./CapsuleModal.css";

const CapsuleModal = ({ isOpen, onClose, capsuleData }) => {
  if (!isOpen) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString.replace(" ", "T"));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const calculateJourneyDays = (createdAt, revealAt) => {
    const created = new Date(createdAt.replace(" ", "T"));
    const reveal = new Date(revealAt.replace(" ", "T"));
    const diff = reveal - created;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="modal-screen">
      <div className="modal">
        <div className="close" onClick={onClose}>
          x
        </div>

        <div className="modal-title">
          <div className="m-title">{capsuleData.title}</div>
          <p>A message from your past</p>
        </div>

        <div className="capsule-revealdate">
          <p>Capsule Revealed</p>
          <p>Revealed on {formatDate(capsuleData.reveal_at)}</p>
        </div>

        <div className="time-detials">
          <div className="timeline">
            <p>Timeline</p>
            <div className="created">
              <span>created</span>
              <span>{formatDate(capsuleData.created_at)}</span>
            </div>
            <div className="journey">
              <span>Journey</span>
              <span>
                {calculateJourneyDays(
                  capsuleData.created_at,
                  capsuleData.reveal_at
                )}
                days
              </span>
            </div>
          </div>
          <div className="timeline">
            <p>Details</p>
            <div className="created">
              <span>Privacy</span>
              <span>{capsuleData.security}</span>
            </div>
            <div className="journey">
              <span>Status</span>
              <span>Revealed</span>
            </div>
          </div>
        </div>

        <div className="capsule-content">
          <div className="message">
            <h3>The Message</h3>
            <div className="nessage-text">{capsuleData.message}</div>
          </div>

          <div className="location-details">
            <div className="icon">
              <img src="icons/Create/map-pin.svg" alt="location" />
            </div>
            <p>{capsuleData.location}</p>
          </div>

          <div className="attachments">
            <h3>Attachment</h3>
            <div className="attachment-list">
              {capsuleData.image_path && (
                <div className="attach-img">
                  <img
                    src={`http://127.0.0.1:8000/storage/${capsuleData.image_path}`}
                    alt="Capsule attachment"
                  />
                </div>
              )}
              {capsuleData.audio_path && (
                <div className="attach-img">
                  <audio
                    controls
                    src={`http://127.0.0.1:8000/storage/${capsuleData.audio_path}`}
                    alt="Capsule attachment"
                  />
                </div>
              )}
            </div>
          </div>

          {capsuleData.tags && capsuleData.tags.length > 0 && (
            <div className="tags-section">
              <h3>Tags</h3>
              <div className="tags-container">
                {capsuleData.tags.map((tag, index) => (
                  <Tag key={index} text={tag} stable={true} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CapsuleModal;
