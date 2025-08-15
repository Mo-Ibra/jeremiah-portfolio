const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about">
        <div className="about-card">
          <div className="about-image">
            <img src="https://via.placeholder.com/150" alt="Your Photo" />
          </div>
          <div className="about-content">
            <h3>About Me</h3>
            <p>
              Hi! I'm Jeremiah, a creative performance architect. I help brands
              grow by leveraging data-driven insights and creative strategies.
              From corporate strategist to leading innovative campaigns, I
              thrive in transforming brands.
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                className="social-icon"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="social-icon"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                className="social-icon"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;