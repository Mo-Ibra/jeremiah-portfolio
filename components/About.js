"use client";

import Image from "next/image";

import { aboutData } from "@/data/data";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-grid"></div>
      <div className="about-container">
        {/* Greeting */}
        <div className="about-left">
          <h2 className="about-greeting">Hey! Im</h2>
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
    </section>
  );
};

export default About;
