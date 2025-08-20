"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Principles() {
  return (
    <section id="principles" className="principles">
      <div className="principles-container">
        {/* Header */}
        <div className="principles-header">
          <h2 className="split-text">
            <span style={{ marginRight: "10px" }}>Core</span>
            <span>Principles</span>
          </h2>
          <p className="header-subtitle">
            Every creator has their own code —<br />
            for both work and ethics.
            <br />
            <span className="highlight text-green-500">So do I.</span>
          </p>
        </div>

        {/* ATTITUDE Section */}
        <div className="principle-section attitude-section">
          <SectionLabel title="ATTITUDE" />
          <div className="attitude-grid">
            {[
              {
                number: "01",
                title: "Narrow focus",
                text: "I believe in doing one thing exceptionally well: creating ads that sell. This narrow approach ensures every ad is optimized to boost ROAS and drive growth.",
              },
              {
                number: "02",
                title: "Performance is key",
                text: "Each ad is built for results. I analyze data, optimize and iterate for performance, and make sure your investment leads to real growth.",
              },
              {
                number: "03",
                title: "Fast delivery",
                text: "I deliver each ad approximately within 72 hours without sacrificing quality, ensuring you stay ahead of the competition.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="attitude-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="card-number">{card.number}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WORKFLOW Section */}
        <div className="principle-section workflow-section">
          <SectionLabel title="WORKFLOW" animated />
          <div className="workflow-grid">
            {[
              {
                step: "01. Onboarding",
                text: "Great work starts with listening — so I begin by learning the heart of your brand, your market, your audience, and your goals.",
              },
              {
                step: "02. Post-production",
                text: "With a deep understanding of your brand and goals, I dive into creating ads that blend psychology, design, and data for maximum impact.",
              },
              {
                step: "03. Launch & Optimize",
                text: "I iterate on creatives to make sure your ads deliver results, tracking performance metrics and optimizing for continuous improvement.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="workflow-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 30 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.3 }}
                />
                <h4>{card.step}</h4>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STACK Section */}
        <div className="principle-section stack-section">
          <SectionLabel title="STACK" animated />
          <div className="stack-grid">
            {[
              {
                name: "Framer",
                desc: "Website Builder",
                icon: "/images/stack/1.jpeg",
              },
              {
                name: "Adobe CC",
                desc: "Design, Video Editing",
                icon: "/images/stack/2.png",
              },
              {
                name: "Figma",
                desc: "Web Design",
                icon: "/images/stack/3.png",
              },
              {
                name: "Klaviyo",
                desc: "Email Marketing",
                icon: "/images/stack/4.jpg",
              },
              {
                name: "Shopify",
                desc: "E-Comm management",
                icon: "/images/stack/5.png",
              },
              {
                name: "Slack",
                desc: "Collaboration",
                icon: "/images/stack/6.png",
              },
            ].map((tool, i) => (
              <motion.div
                key={i}
                className="stack-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="stack-card-container">
                  <Image
                    width={40}
                    height={40}
                    src={tool.icon}
                    alt={tool.name}
                    className="stack-icon"
                  />
                  <div className="stack-info">
                    <h4>{tool.name}</h4>
                    <p>{tool.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ title, animated }) {
  return (
    <div className="section-label">
      <span className="label-dot"></span>
      <span className="label-text">{title}</span>
      <div className="label-line">
        {animated && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </div>
    </div>
  );
}
