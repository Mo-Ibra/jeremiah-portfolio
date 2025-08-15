const Contact = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-bg-animation">
        <div className="cta-circle"></div>
        <div className="cta-circle"></div>
        <div className="cta-circle"></div>
      </div>
      <div className="cta-content">
        <h2>Ready to Scale Your Brand?</h2>
        <p>Stop burning cash on creatives that don't convert.</p>
        {/* <button className="cta-button" onClick="openQuiz()"> */}
        <button className="cta-button">
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default Contact;