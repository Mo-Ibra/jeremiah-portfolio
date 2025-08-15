"use client";

import { motion } from "framer-motion";


export default function Principles() {
  return (
    <section id="principles" className="principles py-20">
      <div className="principles-container max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="principles-header text-center mb-16">
          <h2 className="split-text text-4xl font-bold">
            <span>Core </span>
            <span>Principles</span>
          </h2>
          <p className="header-subtitle text-lg mt-4">
            Every creator has their own code —<br />
            for both work and ethics.<br />
            <span className="highlight text-green-500">So do I.</span>
          </p>
        </div>

        {/* ATTITUDE Section */}
        <div className="principle-section attitude-section mb-20">
          <SectionLabel title="ATTITUDE" />
          <div className="attitude-grid grid md:grid-cols-3 gap-8 mt-6">
            {[
              {
                number: "01",
                title: "Narrow focus",
                text: "I believe in doing one thing exceptionally well: creating ads that sell. This narrow approach ensures every ad is optimized to boost ROAS and drive growth."
              },
              {
                number: "02",
                title: "Performance is key",
                text: "Each ad is built for results. I analyze data, optimize and iterate for performance, and make sure your investment leads to real growth."
              },
              {
                number: "03",
                title: "Fast delivery",
                text: "I deliver each ad approximately within 72 hours without sacrificing quality, ensuring you stay ahead of the competition."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className="attitude-card bg-gray-900 p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="card-number text-2xl font-bold text-green-500">
                  {card.number}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-gray-400">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WORKFLOW Section */}
        <div className="principle-section workflow-section">
          <SectionLabel title="WORKFLOW" animated />
          <div className="workflow-grid grid md:grid-cols-3 gap-8 mt-6">
            {[
              {
                step: "01. Onboarding",
                text: "Great work starts with listening — so I begin by learning the heart of your brand, your market, your audience, and your goals."
              },
              {
                step: "02. Post-production",
                text: "With a deep understanding of your brand and goals, I dive into creating ads that blend psychology, design, and data for maximum impact."
              },
              {
                step: "03. Launch & Optimize",
                text: "I iterate on creatives to make sure your ads deliver results, tracking performance metrics and optimizing for continuous improvement."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className="workflow-card bg-gray-900 p-6 rounded-xl shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 30 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-1 z-50 bg-green-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.3 }}
                />
                <h4 className="text-lg font-semibold">{card.step}</h4>
                <p className="mt-2 text-gray-400">{card.text}</p>
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
    <div className="section-label flex items-center gap-2">
      <span className="label-dot w-3 h-3 bg-green-500 rounded-full"></span>
      <span className="label-text font-semibold">{title}</span>
      <div className="label-line flex-1 h-[2px] bg-gray-700 relative overflow-hidden">
        {animated && (
          <motion.div
            className="absolute top-0 left-0 h-full bg-green-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </div>
    </div>
  );
}