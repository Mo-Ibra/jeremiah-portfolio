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
        <p>Stop burning cash on creatives that don&apos;t convert.</p>
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
