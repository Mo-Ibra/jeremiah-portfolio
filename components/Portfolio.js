import { portfolioReels } from "@/data/data";
import PortfolioReelCard from "./Cards/PortfolioReelCard";
import { useEffect, useState } from "react";
import Header from "./Header";

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const reelsToShow = isMobile
    ? portfolioReels.slice(0, visibleCount)
    : portfolioReels;

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        {/* <div className="portfolio-header">
          <h2 className="portfolio-title">
            <span className="title-word gradient-text">
              REAL Stories That Solve REAL Problems
            </span>
          </h2>
          <p>
            Each ad is crafted based on deep research, historical consumer data,
            and emotional & behavioural psychographics to really resonate with
            and solve consumer problems, concerns, and issues
          </p>
        </div> */}

        <Header badgeText={"My Creative Portfolio"}>
          <h2 className="main-title">
            REAL Stories That Solve  <br />{" "}
            <span className="gradient-text">REAL PROBLEMS!</span>
          </h2>
          <p className="subtitle">
            Each ad is crafted based on deep research, historical consumer data,
            and emotional & behavioural psychographics to really resonate with
            and solve consumer problems, concerns, and issues{" "}
          </p>
        </Header>

        <div className="portfolio-reels-grid">
          {reelsToShow.map((reel, index) => (
            <PortfolioReelCard key={index} {...reel} />
          ))}
        </div>

        {/* only show button on mobile when there are hidden reels */}
        {isMobile && visibleCount < portfolioReels.length && (
          <div className="portfolio-cta-container">
            <button className="portfolio-cta-btn" onClick={handleLoadMore}>
              <span className="btn-text">Want more?</span>
              <span className="btn-arrow">+</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
