const Contact = ({ onOpenQuiz }) => {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-bg-animation">
        <div className="cta-circle"></div>
        <div className="cta-circle"></div>
        <div className="cta-circle"></div>
      </div>
      <div className="cta-content">
        <h2>Ready to Scale Your Brand?</h2>
        <p>For quality purposes, I work with only 2–4 brands at a time.</p>
        <p>Apply below to speak with me and secure your spot.</p>
        <button className="cta-button" onClick={onOpenQuiz}>
          BOOK MEETING
        </button>
      </div>

      <div className="spot-left">
        <span className="spot-dot"></span>
        <span>1 spot left</span>
      </div>
    </section>
  );
};

export default Contact;
