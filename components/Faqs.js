"use client";

import React from "react";

import { motion } from "framer-motion";

import { faqData } from "@/data/data";

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

export default Faqs;
