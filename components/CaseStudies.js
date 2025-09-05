"use client";

import { useState } from "react";
import {
  FiDollarSign,
  FiTrendingUp,
  FiMousePointer,
  FiTarget,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Header from "./Header";

const caseStudies = [
  {
    id: "AccentStudios",
    badge: "RGB Lighting (Our Brand)",
    title: "Accent Studio",
    revenue: "$931,968.93",
    description:
      "We prioritized split-testing viral hooks—given the niche and products are heavily visually focused—and, with fewer than five ad creatives, generated over $900K in revenue.",
    image: "/images/our-studies/1.png",
    imageAlt: "Accent Studio RGB Lighting Setup",
    metrics: {
      revenue: "932K",
      adspend: "384K",
      orders: "12370",
      roas: "3.14x",
    },
  },
  {
    id: "Viva Reveal",
    badge: "Beauty & Wellness",
    title: "Viva Reveal",
    revenue: "$1,245,832.17",
    description:
      "Through strategic influencer partnerships and user-generated content campaigns, we helped Viva Reveal achieve explosive growth in the competitive beauty market with innovative product positioning.",
    image: "/images/our-studies/2.jpg",
    imageAlt: "Viva Reveal Beauty Wellness Setup",
    metrics: {
      revenue: "1.2M",
      adspend: "298K",
      orders: "18450",
      roas: "4.18x",
    },
  },
  {
    id: "Pathos",
    badge: "Tech & Innovation",
    title: "Pathos",
    revenue: "$687,543.29",
    description:
      "By focusing on emotional storytelling and data-driven creative optimization, we transformed Pathos from a startup idea into a profitable tech solution with strong market penetration.",
    image: "/images/our-studies/3.png",
    imageAlt: "Pathos Tech Innovation Workspace",
    metrics: {
      revenue: "687K",
      adspend: "156K",
      orders: "8920",
      roas: "4.41x",
    },
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = caseStudies[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="case-studies">
      <div className="container">
        <Header badgeText={"Success Stories"}>
          <h2 className="main-title">
            Case Studies & <br />{" "}
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="subtitle">
            Recent highlights from past/current brands we&apos;ve helped scale
          </p>
        </Header>

        {/* Main Case Study Card */}
        <div className="case-study-card">
          <div className="card-grid">
            {/* Left Side - Image with Carousel */}
            <div className="image-container">
              <img
                src={currentCase.image || "/placeholder.svg"}
                alt={currentCase.imageAlt}
                className="case-image"
              />
              <div className="image-badge">{currentCase.id}</div>
              
              {/* Carousel Navigation */}
              <div className="navigation">
                <button 
                  onClick={prevSlide}
                  className="nav-buttons"
                  aria-label="Previous case study"
                >
                  <FiChevronLeft />
                </button>
                <button 
                  onClick={nextSlide}
                  className="nav-buttons"
                  aria-label="Next case study"
                >
                  <FiChevronRight />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="indicators">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`indicator ${
                      index === currentIndex ? 'active' : 'inactive'
                    }`}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="content-area">
              <div className="case-badge">{currentCase.badge}</div>

              <h3 className="case-title">
                {currentCase.title}{" "}
                <span className="revenue-highlight">
                  [$0 → {currentCase.revenue}]
                </span>
              </h3>

              <p className="case-description">{currentCase.description}</p>

              {/* Metrics Grid */}
              <div className="metrics-grid">
                <div className="metric-card primary">
                  <div className="metric-header">
                    <FiDollarSign className="text-xl" />
                    <span className="metric-value">
                      {currentCase.metrics.revenue}
                    </span>
                  </div>
                  <span className="metric-label">Revenue</span>
                </div>

                <div className="metric-card primary">
                  <div className="metric-header">
                    <FiTrendingUp className="text-xl" />
                    <span className="metric-value">
                      {currentCase.metrics.adspend}
                    </span>
                  </div>
                  <span className="metric-label">Adspend</span>
                </div>

                <div className="metric-card secondary">
                  <div className="metric-header">
                    <FiMousePointer className="text-xl" />
                    <span className="metric-value">
                      {currentCase.metrics.orders}
                    </span>
                  </div>
                  <span className="metric-label">Orders</span>
                </div>

                <div className="metric-card secondary">
                  <div className="metric-header">
                    <FiTarget className="text-xl" />
                    <span className="metric-value">
                      {currentCase.metrics.roas}
                    </span>
                  </div>
                  <span className="metric-label">Roas</span>
                </div>
              </div>

              {/* Display Tags - Non-functional */}
              <div className="tags-container">
                {caseStudies.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    className={`tag-display ${
                      index === currentIndex ? "active" : "inactive"
                    }`}
                  >
                    {caseStudy.id}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}