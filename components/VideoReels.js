import { useEffect, useState } from "react";
import VideoReelCard from "./Cards/VideoReelCard";
import { videoReels, portfolioReels } from "@/data/data";

const VideoReels = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

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
      setIsExpanded(false);
    } else {
      setVisibleCount(4);
      setIsExpanded(false);
    }
  }, [isMobile]);

  // Choose data source based on device
  const reelsData = isMobile ? portfolioReels : videoReels;
  const displayedReels = isMobile ? reelsData.slice(0, visibleCount) : reelsData;
  const hasMore = isMobile && visibleCount < reelsData.length;
  const isFullyExpanded = isMobile && visibleCount >= reelsData.length;

  const handleWantMore = () => {
    const newCount = Math.min(visibleCount + 4, reelsData.length);
    setVisibleCount(newCount);
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setVisibleCount(4);
    setIsExpanded(false);
  };

  // Determine button text and action
  const getButtonConfig = () => {
    if (!isExpanded && visibleCount === 4) {
      return {
        text: "See Full Portfolio",
        icon: "→",
        action: handleWantMore
      };
    } else if (hasMore) {
      return {
        text: "Want More?",
        icon: "+",
        action: handleWantMore
      };
    } else if (isFullyExpanded) {
      return {
        text: "Collapse",
        icon: "−",
        action: handleCollapse
      };
    }
  };

  return (
    <section id="video-reels" className="video-reels">
      <div className="grid-background"></div>
      <div className="video-reels-container">
        <div className="video-reels-header">
          <p>
            I&apos;ve created <span className="gradient-text">1,000+</span> ads
            that
            <br />
            have generated <span className="gradient-text">$1M+</span> in sales
          </p>
        </div>

        <div className="reels-grid">
          {displayedReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>

        {/* Dynamic Button - Mobile Only */}
        {isMobile && (visibleCount === 4 || hasMore || isFullyExpanded) && (
          <div className="want-more-container">
            <button onClick={getButtonConfig().action} className="want-more-btn">
              <span className="btn-text">{getButtonConfig().text}</span>
              <span className="btn-icon">{getButtonConfig().icon}</span>
            </button>
          </div>
        )}

        {/* Desktop Portfolio CTA */}
        {!isMobile && (
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