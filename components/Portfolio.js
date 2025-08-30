import { portfolioReels } from "@/data/data";
import PortfolioReelCard from "./Cards/PortfolioReelCard";
import { useEffect, useState } from "react";

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
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            <span className="title-word">Proven</span>
            <span className="title-word gradient-text">Performance</span>
          </h2>
        </div>

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
