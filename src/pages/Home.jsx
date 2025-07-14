import { useEffect } from "react";
import select from "../hooks/navSelect";
import HeroBtn from "../components/Landing/HeroBtn";
import InfoCard from "../components/Landing/InfoCard";
import "./Home.css";

const Home = () => {
  const iconPath = "../public/icons/Landing";
  const cardContent = [
    {
      title: "Time-Locked Messages",
      desc: "Set future reveal dates and watch your capsules unlock exactly when you planned.",
      icon: `${iconPath}/clock.svg`,
    },
    {
      title: "Global Community",
      desc: "Share your stories with the world or keep them private you choose who sees what.",
      icon: `${iconPath}/earth.svg`,
    },
    {
      title: "Rich Media Support",
      desc: "Attach images, audio recordings, and customize your capsules in special way.",
      icon: `${iconPath}/sparkles.svg`,
    },
  ];
  useEffect(() => {
    select("home");
  }, []);

  return (
    <div className="home">
      <section className="hero container">
        <div className="hero-txt">
          <h1>
            Send messages to your <span>future self</span>
          </h1>
          <p>
            Capture your thoughts, dreams, and memorize in digital time
            capsules. Reflect on your journey when the time is right.
          </p>
          <div className="buttons">
            <HeroBtn text="Create You Capsule" to="/create" />
            <HeroBtn text="Explore Capsules" to="/public" />
          </div>
        </div>
        <div className="hero-img">
          <img src="../public/hero.png" alt="time capsule" />
        </div>
      </section>
      <section className="info">
        <div className="container">
          <h3 className="sec-title">Preserve Your Memories Across Time</h3>
          <div className="info-cards">
            {cardContent.map((card) => {
              return (
                <InfoCard
                  title={card.title}
                  desc={card.desc}
                  icon={card.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
