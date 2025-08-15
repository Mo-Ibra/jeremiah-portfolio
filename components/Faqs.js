"use client";

import React from "react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const Faqs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-container">
        <motion.h2
          className="faqs-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="f-bold">Questions</span>
          <span className="f-thin"> you might have</span>
        </motion.h2>

        <motion.div
          className="faq-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqData.map((faq, index) => (
            <motion.div key={index} className="faq-item" variants={itemVariants}>
              <input type="checkbox" id={`faq${index}`} />
              <label className="faq-question" htmlFor={`faq${index}`}>
                <span className="faq-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{faq.question}</span>
              </label>
              <div className="faq-answer">{faq.answer}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "Do you cover any additional advertising services?",
    answer:
      "Absolutely. You may want to consider additional add-ons such as scriptwriting and briefing. As our collaboration evolves, I may expand services to support more of your digital growth."
  },
  {
    question: "What makes you different?",
    answer:
      "I'm proud of my core principles that set me apart in the creative marketing landscape. My approach is rooted in structured storytelling, performance-driven thinking, and authentic partnerships."
  },
  {
    question: "How do we know your ads will work for our brand?",
    answer:
      "My process is deeply collaborative. I research your brand and audience, then build high-converting ad content backed by performance insights and consistent iteration."
  },
  {
    question: "What does your pricing look like?",
    answer:
      "Pricing is tailored based on your goals and scope. I don't do generic packages—every quote is custom, clear, and value-focused with zero hidden fees."
  },
  {
    question: "Why not hire a full-time editor or agency?",
    answer:
      "Great question. Hiring full-time costs $60k+ annually with overhead—and often, underutilization. Agencies? Add markup, bureaucracy, and delays. I deliver fast, strategic creative when and how you need it."
  }
];

export default Faqs;
