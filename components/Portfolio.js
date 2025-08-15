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
              <div
                className="wistia_embed wistia_async_glq2nisk1j autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
              <div
                className="wistia_embed wistia_async_0l19efg1jt autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
              <div
                className="wistia_embed wistia_async_s3pthor4vn autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
              <div
                className="wistia_embed wistia_async_dkzw4n1wr0 autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
