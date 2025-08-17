"use client";
import { motion } from "framer-motion";
import { servicesData } from "@/data/data";
import ServiceCard from "./Cards/ServiceCard";

const Services = () => {
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
        <div className="services-header">
          <h2 className="services-title">
            <span className="title-word">My</span>
            <span className="title-word gradient-text">Services</span>
          </h2>
        </div>

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
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
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
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
