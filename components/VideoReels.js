const VideoReels = () => {
  return (
    <section id="video-reels" className="video-reels">
      <div className="particles" id="particles"></div>
      <div className="video-reels-container">
        <div className="reels-grid">
          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <video
                className="reel-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="video1.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">2.3M views</span>
                  <span className="reel-platform">TikTok</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/12" }}>
              <video
                className="reel-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="video2.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">1.8M views</span>
                  <span className="reel-platform">Instagram</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/10" }}>
              <video
                className="reel-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="video3.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">3.5M views</span>
                  <span className="reel-platform">TikTok</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{  aspectRatio: "9/16" }}>
              <video
                className="reel-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="video4.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">925K views</span>
                  <span className="reel-platform">YouTube Shorts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/14" }}>
              <video
                className="reel-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="video5.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">1.2M views</span>
                  <span className="reel-platform">Facebook</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{  aspectRatio: "9/11" }}>
              <video
                className="reel-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="video6.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">4.1M views</span>
                  <span className="reel-platform">Instagram</span>
                </div>
              </div>
            </div>
          </div>
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
