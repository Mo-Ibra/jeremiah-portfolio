"use client";

import Image from "next/image";

import { aboutData } from "@/data/data";

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Header from "./Header";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-grid"></div>

      {/* Header */}
      {/* <div className="about-main-header">
        <h2 className="about-main-title">
          <span className="title-word" style={{ marginRight: "10px" }}>
            The Talent Behind Your
          </span>
          <br />
          <span className="title-word gradient-text">Creative Success</span>
        </h2>
      </div> */}

      <Header badgeText={"About Me"} marginBottom="1.5rem">
        <h2 className="main-title">
          The Talent Behind Your
          <br />
          <span className="gradient-text">Creative Success</span>
        </h2>
      </Header>

      <div className="about-container">
        {/* Greeting */}
        <div className="about-left">
          <h2 className="about-greeting">Hey! I&apos;m</h2>
        </div>

        {/* Profile Image */}
        <div className="about-center">
          <div className="about-image-wrapper">
            <Image
              src={aboutData.image}
              alt="Jeremiah profile photo"
              className="about-image"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Content */}
        <div className="about-right">
          <h2 className="about-name">{aboutData.name}</h2>
          <h3 className="about-title">{aboutData.title}</h3>
        </div>
      </div>
      <p className="about-description">{aboutData.description}</p>

      {/* Social Media Icons */}
      <div className="about-socials">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default About;
