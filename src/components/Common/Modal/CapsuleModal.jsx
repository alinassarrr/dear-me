import Tag from "../Tags/Tag";
import "./CapsuleModal.css";
import JSZip from "jszip";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

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
  // thanks to hindi man : https://www.youtube.com/watch?v=mfPAX0R6k1M
  const exportZip = async () => {
    const zip = new JSZip();
    const folder = zip.folder(`${capsuleData.title}_capsule`);
    try {
      // 1. screenshot of the modal (like in the video)
      const modal = document.querySelector(".modal");
      const canvas = await html2canvas(modal, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });
      canvas.toBlob((blob) => {
        folder.file("capsule_screenshot.png", blob);
      }, "image/png");
      // 2. Add text file with structured data
      const textContent =
        `Exported Capsule\n\n` +
        `Title: ${capsuleData.title}\n` +
        `Created: ${formatDate(capsuleData.created_at)}\n` +
        `Revealed: ${formatDate(capsuleData.reveal_at)}\n` +
        `Message:\n${capsuleData.message}\n\n` +
        `Tags: ${capsuleData.tags?.join(", ") || "None"}`;
      folder.file("details.txt", textContent);

      // 3. Add attachments (adapted from your previous code)
      const addAttachment = async (path, filename) => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/storage/${path}`);
          const blob = await response.blob();
          folder.file(filename, blob);
        } catch (error) {
          console.warn(`Failed to fetch ${filename}`, error);
        }
      };

      if (capsuleData.image_path) {
        await addAttachment(capsuleData.image_path, "capsule_image");
      }

      if (capsuleData.audio_path) {
        await addAttachment(capsuleData.audio_path, "capsule_audio");
      }

      // 4. Generate and download ZIP
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `${capsuleData.title}_capsule.zip`);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Export failed. Please check console for details.");
    }
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
        <div className="export" onClick={exportZip}>
          Export Capsule
        </div>
      </div>
    </div>
  );
};

export default CapsuleModal;
