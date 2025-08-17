"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutData } from "@/data/data";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Greeting */}
        <motion.h2
          className="about-greeting"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hey! I&apos;m
        </motion.h2>

        {/* Profile Image */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={aboutData.image}
            alt="Jeremiah profile photo"
            className="about-image"
            width={300}
            height={300}
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          className="about-name"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {aboutData.name}
        </motion.h2>

        {/* Title */}
        <motion.h3
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {aboutData.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {aboutData.description}
        </motion.p>
      </div>
    </section>
  );
};

export default About;