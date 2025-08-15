"use client";

import { useEffect } from "react";

const Preload = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("loaded");
    }, 1500);
  }, []);

  return (
    <div className="preloader" id="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="preloader-circle"></div>
          <svg
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
            }}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" rx="20" fill="#000" />
            <g transform="translate(50, 50) scale(0.6) translate(-50, -50)">
              <path d="M50 20 L25 55 L45 55 Z" fill="white" />
              <path d="M52 25 L52 55 L70 55 Z" fill="white" />
              <path
                d="M30 60 C30 60 35 65 50 65 C65 65 70 60 70 60 L25 60 C25 60 27.5 62.5 30 60 Z"
                fill="white"
              />
              <path
                d="M20 70 Q30 75 40 70 Q50 75 60 70 Q70 75 80 70"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M25 75 Q35 80 45 75 Q55 80 65 75 Q75 80 85 75"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </g>
          </svg>
        </div>
        <p className="preloader-text">LOADING IMMERSIVE EXPERIENCE</p>
      </div>
    </div>
  );
};

export default Preload;
