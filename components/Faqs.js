const Faqs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-container">
        <h2 className="faqs-title">
          <span className="f-bold">Questions</span>
          <span className="f-thin">you might have</span>
        </h2>
        <div className="faq-list">
          <div className="faq-item">
            <input type="checkbox" id="faq1" />
            <label className="faq-question" htmlFor="faq1">
              <span className="faq-index">01</span>
              <span>Do you cover any additional advertising services?</span>
            </label>
            <div className="faq-answer">
              Absolutely. You may want to consider additional add-ons such as
              scriptwriting and briefing. As our collaboration evolves, I may
              expand services to support more of your digital growth.
            </div>
          </div>

          <div className="faq-item">
            <input type="checkbox" id="faq2" />
            <label className="faq-question" htmlFor="faq2">
              <span className="faq-index">02</span>
              <span>What makes you different?</span>
            </label>
            <div className="faq-answer">
              I'm proud of my core principles that set me apart in the creative
              marketing landscape. My approach is rooted in structured
              storytelling, performance-driven thinking, and authentic
              partnerships.
            </div>
          </div>

          <div className="faq-item">
            <input type="checkbox" id="faq3" />
            <label className="faq-question" htmlFor="faq3">
              <span className="faq-index">03</span>
              <span>How do we know your ads will work for our brand?</span>
            </label>
            <div className="faq-answer">
              My process is deeply collaborative. I research your brand and
              audience, then build high-converting ad content backed by
              performance insights and consistent iteration.
            </div>
          </div>

          <div className="faq-item">
            <input type="checkbox" id="faq4" />
            <label className="faq-question" htmlFor="faq4">
              <span className="faq-index">04</span>
              <span>What does your pricing look like?</span>
            </label>
            <div className="faq-answer">
              Pricing is tailored based on your goals and scope. I don't do
              generic packages—every quote is custom, clear, and value-focused
              with zero hidden fees.
            </div>
          </div>

          <div className="faq-item">
            <input type="checkbox" id="faq5" />
            <label className="faq-question" htmlFor="faq5">
              <span className="faq-index">05</span>
              <span>Why not hire a full-time editor or agency?</span>
            </label>
            <div className="faq-answer">
              Great question. Hiring full-time costs $60k+ annually with
              overhead—and often, underutilization. Agencies? Add markup,
              bureaucracy, and delays. I deliver fast, strategic creative when
              and how you need it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
