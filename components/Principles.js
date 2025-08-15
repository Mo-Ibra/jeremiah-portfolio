const Principles = () => {
  return (
        <section id="principles" className="principles">
        <div className="principles-container">
            <div className="principles-header">
                <h2 className="split-text">
                    <span>Core</span>
                    <span>Principles</span>
                </h2>
                <p className="header-subtitle">
                    Every creator has their own code — <br />
                    for both work and ethics.<br />
                    <span className="highlight">So do I.</span>
                </p>
            </div>
            
            <div className="principle-section attitude-section">
                <div className="section-label">
                    <span className="label-dot"></span>
                    <span className="label-text">ATTITUDE</span>
                    <div className="label-line"></div>
                </div>
                
                <div className="attitude-grid">
                    <div className="attitude-card">
                        <div className="card-number">01</div>
                        <h3>Narrow focus</h3>
                        <p>I believe in doing one thing exceptionally well: creating ads that sell. This narrow approach ensures every ad is optimized to boost ROAS and drive growth.</p>
                    </div>
                    
                    <div className="attitude-card">
                        <div className="card-number">02</div>
                        <h3>Performance is key</h3>
                        <p>Each ad is built for results. I analyze data, optimize and iterate for performance, and make sure your investment leads to real growth.</p>
                    </div>
                    
                    <div className="attitude-card">
                        <div className="card-number">03</div>
                        <h3>Fast delivery</h3>
                        <p>I deliver each ad approximately within 72 hours without sacrificing quality, ensuring you stay ahead of the competition.</p>
                    </div>
                </div>
            </div>
            
            <div className="principle-section workflow-section">
                <div className="section-label">
                    <span className="label-dot"></span>
                    <span className="label-text">WORKFLOW</span>
                    <div className="label-line"></div>
                </div>
                
                <div className="workflow-grid">
                    <div className="workflow-card">
                        <h4>01. Onboarding</h4>
                        <p>Great work starts with listening — so I begin by learning the heart of your brand, your market, your audience, and your goals.</p>
                    </div>
                    
                    <div className="workflow-card">
                        <h4>02. Post-production</h4>
                        <p>With a deep understanding of your brand and goals, I dive into creating ads that blend psychology, design, and data for maximum impact.</p>
                    </div>
                    
                    <div className="workflow-card">
                        <h4>03. Launch & Optimize</h4>
                        <p>I iterate on creatives to make sure your ads deliver results, tracking performance metrics and optimizing for continuous improvement.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Principles;