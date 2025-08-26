"use client";

import { useEffect } from "react";

/**
 * The Hero component is a high-level component that provides a hero section for the page.
 * It contains various sub-components such as floating metrics, trust strip, and call-to-actions.
 * The component uses window scroll event to update the parallax effect on the floating metrics and trust strip.
 * The component also includes a trust strip that displays the number of Shopify brands that trust the company.
 *
 * @return {JSX.Element} The Hero component.
 */
const Hero = () => {
  useEffect(() => {
    function updateParallax() {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax-layer");
      parallaxElements.forEach((el, index) => {
        const depth = index * 0.05;
        el.style.transform = `translateY(${scrollY * depth}px)`;
      });
    }

    function init3DEffects() {
      if (window.matchMedia("(hover: hover)").matches) {
        document.addEventListener("mousemove", (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 2;
          const y = (e.clientY / window.innerHeight - 0.5) * 2;

          const metrics = document.querySelectorAll(".metric-badge");
          metrics.forEach((metric, index) => {
            const speed = 0.5 + index * 0.1;
            metric.style.transform = `${metric.style.transform} translateX(${
              x * 10 * speed
            }px) translateY(${y * 10 * speed}px)`;
          });
        });
      }
    }

    function createParticles() {
      const particlesContainer = document.getElementById("particles");
      const particleCount = window.innerWidth < 768 ? 25 : 50; // Reduce particles on mobile

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 10 + "s";
        particle.style.animationDuration = 10 + Math.random() * 10 + "s";
        particlesContainer.appendChild(particle);
      }
    }

    window.addEventListener("scroll", updateParallax);
    init3DEffects();
    createParticles();

    return () => {
      window.removeEventListener("scroll", updateParallax);
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="particles" id="particles"></div>
      <div className="hero-grid"></div>

      <div className="floating-metrics">
        <div className="metric-badge cpa">
          <span className="metric-dot"></span>
          CPA ↓32%
        </div>
        <div className="metric-badge roas">
          <span className="metric-dot"></span>
          ROAS ↑4.8x
        </div>
        <div className="metric-badge cpc">
          <span className="metric-dot"></span>
          CPC ↓$0.42
        </div>
        <div className="metric-badge ctr">
          <span className="metric-dot"></span>
          CTR 3.2%
        </div>
      </div>

      <div className="hero-content">
        <div
          className="hero-decorative-left"
          style={{ transform: "translate(50px, 50px)" }}
        >
          <span
            className="decorative-text"
            style={{ display: "inline-block", transform: "rotate(-20deg)" }}
          ></span>
          <svg
            className="decorative-arrow-left"
            width="0"
            height="0"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", marginTop: "2px" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="0"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0 0 L10 3.5 L0 7 Z" fill="black" opacity="0.6" />
              </marker>
            </defs>
          </svg>
        </div>

        <div
          className="hero-decorative-right"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <svg
              width="0"
              height="0"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", marginBottom: "4px" }}
            >
              <defs>
                <marker
                  id="arrowhead-right"
                  markerWidth="10"
                  markerHeight="10"
                  refX="4"
                  refY="5"
                  orient="290"
                  markerUnits="strokeWidth"
                >
                  <path d="M0 0 L10 5 L0 10 Z" fill="black" opacity="0.6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <h1 className="hero-headline">
          <span className="headline">
            Generate Better{" "}
            <span className="gradient-text" data-text="ROI">
              ROI
            </span>
          </span>
          <span className="headline">
            with <span className="underline-creative">Psychology-Based</span>
          </span>
          <span className="headline">Performance Creatives</span>
        </h1>
        <p className="hero-subtitle">
          Blending data, design, and marketing psychology to help DTC brands
          scale further through creative content that converts.
        </p>

        <div className="hero-cta-buttons">
          <a href="#contact" className="hero-btn hero-btn-primary">
            I&apos;m Ready To Talk →
          </a>
          <a href="#video-reels" className="hero-btn hero-btn-secondary">
            Show Me Some Proof First →
          </a>
        </div>

        <div className="line-bg"></div>

        <div className="trust-strip">
          <div className="trust-content">
            <span className="trust-text">TRUSTED BY</span>
            <div className="trust-divider"></div>
            <svg
              className="shopify-logo"
              viewBox="0 0 256 292"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z"
                fill="currentColor"
                fillOpacity="0.95"
              />
              <path
                d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
                fill="currentColor"
              />
              <path
                d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338"
                fill="white"
              />
            </svg>
            <div className="trust-divider"></div>
            <span className="trust-count">86+</span>
            <span className="trust-brands">SHOPIFY BRANDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
