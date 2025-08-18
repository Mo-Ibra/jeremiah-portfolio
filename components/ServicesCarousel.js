"use client";

import React from "react";

import { motion } from "framer-motion";

import { useState } from "react";

import ServicesCarouselCard from "./Cards/ServicesCarouselCard";

import { servicesData } from "@/data/data";

export default function ServicesCarousel() {
  const [currentSlides, setCurrentSlides] = useState({
    0: 0,
    1: 0,
    2: 0,
  });

  const nextSlide = (sectionIndex) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [sectionIndex]:
        (prev[sectionIndex] + 1) % servicesData[sectionIndex].imagesCarousel.length,
    }));
  };

  const prevSlide = (sectionIndex) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [sectionIndex]:
        prev[sectionIndex] === 0
          ? servicesData[sectionIndex].imagesCarousel.length - 1
          : prev[sectionIndex] - 1,
    }));
  };

  return (
    <motion.section
      className="services"
      id="services"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="services-container">
        <h2 className="services-title">
          <span className="title-word">My</span>
          <span className="title-word gradient-text">Services</span>
        </h2>

        <motion.div
          className="services-cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {servicesData.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
               <ServicesCarouselCard
                key={serviceIndex}
                serviceIndex={serviceIndex}
                service={service}
                currentSlides={currentSlides}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
