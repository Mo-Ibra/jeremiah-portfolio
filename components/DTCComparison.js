const DTCComparison = () => {
  return (
    <section className="dtc-comparison">
      <div className="dtc-comparison-grid"></div>
      <div className="container">
        {/* Decorative star */}
        <div className="star-decoration">⭐</div>

        {/* Header */}
        <h2 className="dtc-title">
          <span className="title-word">
            Why Established <span className="gradient-text">DTC</span>
          </span>
          <span className="title-word">Brands Work With Me?</span>
        </h2>

        <div className="comparison-container">
          {/* Other Agencies Column */}
          <div className="other">
            <div className="box">
              <h3 className="column-title">Other Agencies</h3>

              <div className="feature-list">
                <div className="feature-item negative">
                  <span className="icon">👎</span>
                  <span className="text">
                    Boring &apos;Cookie Cutter&apos; Ads
                  </span>
                </div>

                <div className="feature-item negative">
                  <span className="icon">👎</span>
                  <span className="text">No Learning or Optimization</span>
                </div>

                <div className="feature-item negative">
                  <span className="icon">👎</span>
                  <span className="text">Poor Communication</span>
                </div>

                <div className="feature-item negative">
                  <span className="icon">👎</span>
                  <span className="text">Bad Customer Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Jeremiah Column */}
          <div className="jeremiah">
            <div className="box">
              <div className="brand-name">Jeremiah.</div>

              <div className="feature-list">
                <div className="feature-item positive">
                  <span className="icon">👍</span>
                  <span className="text">High Performance Creative</span>
                </div>

                <div className="feature-item positive">
                  <span className="icon">👍</span>
                  <span className="text">Scale Through Creative Diversity</span>
                </div>

                <div className="feature-item positive">
                  <span className="icon">👍</span>
                  <span className="text">Detailed Reporting & Insights</span>
                </div>

                <div className="feature-item positive">
                  <span className="icon">👍</span>
                  <span className="text">Full-funnel Creative Approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DTCComparison;
