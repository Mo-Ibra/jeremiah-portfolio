"use client";

import Image from "next/image";
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
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={45}
            height={45}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <p className="preloader-text">LOADING IMMERSIVE EXPERIENCE</p>
      </div>
    </div>
  );
};

export default Preload;
