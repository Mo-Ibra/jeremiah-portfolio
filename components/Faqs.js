"use client";

import React from "react";

import { faqData } from "@/data/data";

const Faqs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-container">
        <h2
          className="faqs-title"
        >
          <span className="f-bold">Questions</span>
          <span className="f-thin"> you might have</span>
        </h2>

        <div
          className="faq-list"
        >
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <input type="checkbox" id={`faq${index}`} />
              <label className="faq-question" htmlFor={`faq${index}`}>
                <span className="faq-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{faq.question}</span>
              </label>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
