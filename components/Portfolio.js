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
          <div className="portfolio-reel-card">
            <div className="portfolio-reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <video
                className="portfolio-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="portfolio-video1.mp4" type="video/mp4" />
              </video>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="portfolio-metric">8.2M reach</span>
                  <span className="portfolio-client">Fashion Brand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-reel-card">
            <div className="portfolio-reel-wrapper" style={{ aspectRatio: "9/13" }}>
              <video
                className="portfolio-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="portfolio-video2.mp4" type="video/mp4" />
              </video>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="portfolio-metric">320% ROAS</span>
                  <span className="portfolio-client">Beauty</span>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-reel-card">
            <div className="portfolio-reel-wrapper" style={{ aspectRatio: "9/11" }}>
              <video
                className="portfolio-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="portfolio-video3.mp4" type="video/mp4" />
              </video>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="portfolio-metric">$1.2M revenue</span>
                  <span className="portfolio-client">Tech Startup</span>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-reel-card">
            <div className="portfolio-reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <video
                className="portfolio-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="portfolio-video4.mp4" type="video/mp4" />
              </video>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="portfolio-metric">45% CTR boost</span>
                  <span className="portfolio-client">E-commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
