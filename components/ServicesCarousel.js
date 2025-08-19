"use client";

import React from "react";

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
    <section
      className="services"
      id="services"
    >
      <div className="services-container">
        <h2 className="services-title">
          <span className="title-word">My</span>
          <span className="title-word gradient-text">Services</span>
        </h2>

        <div
          className="services-cards"
        >
          {servicesData.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
            >
               <ServicesCarouselCard
                key={serviceIndex}
                serviceIndex={serviceIndex}
                service={service}
                currentSlides={currentSlides}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
