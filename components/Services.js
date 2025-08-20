"use client";

import { servicesData } from "@/data/data";
import ServiceCard from "./Cards/ServiceCard";

const Services = () => {
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
          {servicesData.map((service, index) => (
            <div
              key={index}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
