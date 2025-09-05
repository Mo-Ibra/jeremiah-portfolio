import { useEffect, useState } from "react";
import VideoReelCard from "./Cards/VideoReelCard";
import { videoReels, portfolioReels } from "@/data/data";

const VideoReels = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load Wistia script
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

  // Reset visible count when switching between mobile/desktop
  useEffect(() => {
    if (!isMobile) {
      setVisibleCount(videoReels.length);
    } else {
      setVisibleCount(4);
    }
  }, [isMobile]);

  // Choose data source based on device
  const reelsData = isMobile ? portfolioReels : videoReels;
  const displayedReels = isMobile
    ? reelsData.slice(0, visibleCount)
    : reelsData;
  const hasMore = isMobile && visibleCount < reelsData.length;

  const handleWantMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, reelsData.length));
  };

  return (
    <section id="video-reels" className="video-reels">
      <div className="grid-background"></div>
      <div className="video-reels-container">
        <div className="video-reels-header">
          <p>
            I've created <span className="gradient-text">1,000+</span> ads that
            <br />
            have generated <span className="gradient-text">$1M+</span> in sales
          </p>
        </div>

        <div className="reels-grid">
          {displayedReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>

        {/* Want More Button - Mobile Only */}
        {isMobile && hasMore ? (
          <div className="want-more-container">
            <button onClick={handleWantMore} className="want-more-btn">
              <span className="btn-text">Want More</span>
              <span className="btn-icon">+</span>
            </button>
          </div>
        ) : (
          <div className="portfolio-cta-container">
            <a href="#portfolio" className="portfolio-cta-btn">
              <span className="btn-text">See Full Portfolio</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoReels;
