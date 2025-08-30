import { useEffect } from "react";
import VideoReelCard from "./Cards/VideoReelCard";
import { videoReels } from "@/data/data";

const VideoReels = () => {
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://fast.wistia.com/assets/external/E-v1.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="video-reels" className="video-reels">
      <div className="grid-background"></div>
      <div className="video-reels-container">
        <div className="video-reels-header">
          <p>
            I’ve created <span className="gradient-text">1,000+</span> ads that 
            <br />have generated{" "}
            <span className="gradient-text">$1M+</span> in sales
          </p>
        </div>

        <div className="reels-grid">
          {videoReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>

        <div className="portfolio-cta-container">
          <a href="#portfolio" className="portfolio-cta-btn">
            <span className="btn-text">See Full Portfolio</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoReels;
