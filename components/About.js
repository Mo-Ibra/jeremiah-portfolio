"use client";

import Image from "next/image";

import { aboutData } from "@/data/data";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Greeting */}
        <h2
          className="about-greeting"
        >
          Hey! I&apos;m
        </h2>

        {/* Profile Image */}
        <div
          className="about-image-wrapper"
        >
          <Image
            src={aboutData.image}
            alt="Jeremiah profile photo"
            className="about-image"
            width={300}
            height={300}
          />
        </div>

        {/* Name */}
        <h2
          className="about-name"
        >
          {aboutData.name}
        </h2>

        {/* Title */}
        <h3
          className="about-title"
        >
          {aboutData.title}
        </h3>

        {/* Description */}
        <p
          className="about-description"
        >
          {aboutData.description}
        </p>
      </div>
    </section>
  );
};

export default About;