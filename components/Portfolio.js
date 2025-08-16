import { portfolioReels } from "@/data/data";
import PortfolioReelCard from "./Cards/PortfolioReelCard";

const Portfolio = () => {
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
          { portfolioReels.map((reel, index) => (
            <PortfolioReelCard key={index} {...reel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
