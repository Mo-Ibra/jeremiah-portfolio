import { useEffect } from "react";

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
      <div className="particles" id="particles"></div>
      <div className="video-reels-container">
        <div className="reels-grid">
          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_lbokfo5iv3 autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>

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
              <div
                className="wistia_embed wistia_async_69qiuv07hz autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
              <div
                className="wistia_embed wistia_async_ktw4hsumt8 autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">3.5M views</span>
                  <span className="reel-platform">TikTok</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_n3q3weig8v autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
              <div
                className="wistia_embed wistia_async_1ku3mu07k8 autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">1.2M views</span>
                  <span className="reel-platform">Facebook</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/11" }}>
              <div
                className="wistia_embed wistia_async_dorz4lqu14 autoPlay=false"
                style={{ height: "100%", width: "100%" }}
              ></div>
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
