"use client";

import React from "react";

import { useState } from "react";

import ServicesCarouselCard from "./Cards/ServicesCarouselCard";

import { servicesData } from "@/data/data";
import Header from "./Header";

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
        (prev[sectionIndex] + 1) %
        servicesData[sectionIndex].imagesCarousel.length,
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
    <section className="services" id="services">
      <div className="services-container">
        {/* <h2 className="services-title">
          <span className="title-word">UGC Content + Studio Content + AI =</span>
          <br />
          <span className="title-word gradient-text">The Ultimate Growth Engine for DTC</span>
        </h2> */}

        <Header badgeText={"Here’s what I can do for your brandvices"}>
          <h2 className="main-title">
            UGC Content + Studio Content + AI = {" "} <br />
            <span className="gradient-text">The Ultimate Growth Engine for DTC</span>
          </h2>
        </Header>

        <div className="services-cards">
          {servicesData.map((service, serviceIndex) => (
            <div key={serviceIndex}>
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
