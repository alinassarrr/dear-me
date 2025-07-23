import "./InfoCard.css";
const InfoCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <div className="info-card">
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default InfoCard;
