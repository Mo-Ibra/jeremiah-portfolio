import Image from "next/image";
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
                className="wistia_embed wistia_async_lbokfo5iv3"
                style={{ height: "100%", width: "100%" }}
              ></div>

              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">2.3M views</span>
                  <span className="reel-platform">TikTok</span>
                </div>
              </div>
            </div>

            <div className="reel-testimonial">
              <p>
                That was an amazing experience. I had a great time and learned a
                lot. I&apos;m so grateful for the opportunity to work with Jeremiah.
              </p>
              <div className="reel-testimonial-author">
                <Image
                  src="/images/testimonials/1.jpg"
                  alt="Testimonial Author"
                  width={60}
                  height={60}
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Jeremiah Smith</p>
                  <p className="author-title">CEO, Company Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_69qiuv07hz"
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
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_ktw4hsumt8"
                style={{ height: "100%", width: "100%", aspectRatio: "9/16" }}
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
                className="wistia_embed wistia_async_n3q3weig8v"
                style={{ height: "100%", width: "100%" }}
              ></div>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">925K views</span>
                  <span className="reel-platform">YouTube Shorts</span>
                </div>
              </div>
            </div>

            
            <div className="reel-testimonial">
              <p>
                That was an amazing experience. I had a great time and learned a
                lot. I&apos;m so grateful for the opportunity to work with Jeremiah.
              </p>
              <div className="reel-testimonial-author">
                <Image
                  src="/images/testimonials/2.jpg"
                  alt="Testimonial Author"
                  width={60}
                  height={60}
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Jeremiah Smith</p>
                  <p className="author-title">CEO, Company Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_1ku3mu07k8"
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
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_dorz4lqu14"
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

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_b606gkduct"
                style={{ height: "100%", width: "100%" }}
              ></div>
              <div className="reel-overlay">
                <div className="reel-info">
                  <span className="reel-metric">4.1M views</span>
                  <span className="reel-platform">Instagram</span>
                </div>
              </div>
            </div>

            <div className="reel-testimonial">
              <p>
                That was an amazing experience. I had a great time and learned a
                lot. I&apos;m so grateful for the opportunity to work with Jeremiah. 
              </p>
              <div className="reel-testimonial-author">
                <Image
                  src="/images/testimonials/3.jpg"
                  alt="Testimonial Author"
                  width={60}
                  height={60}
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Jeremiah Smith</p>
                  <p className="author-title">CEO, Company Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reel-card">
            <div className="reel-wrapper" style={{ aspectRatio: "9/16" }}>
              <div
                className="wistia_embed wistia_async_vb44bp1fb5"
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
