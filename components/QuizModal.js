const QuizModal = () => {
  const closeQuiz = () => {
    console.log("Close");
  };

  const nextQuizStep = () => {
    console.log("NEXT");
  };

  return (
    <div className="quiz-modal" id="quizModal">
      <div className="quiz-container">
        <button className="quiz-close" onClick={closeQuiz()}>
          ×
        </button>

        <div className="quiz-progress">
          <div className="progress-bar" id="progressBar"></div>
        </div>

        <div className="quiz-header">
          <h3 className="quiz-title">Let's Create Your Growth Strategy</h3>
          <p className="quiz-subtitle">
            Answer a few questions to help us understand your needs
          </p>
        </div>

        <div className="quiz-body">
          <form id="quizForm">
            <div className="quiz-step active" data-step="1">
              <h4 className="quiz-question">
                What platform are you currently advertising on?
              </h4>
              <div className="quiz-radio-group">
                <input
                  type="radio"
                  name="platform"
                  //   value="Facebook/Instagram"
                  id="platform1"
                  className="quiz-radio-input"
                  required
                />
                <label htmlFor="platform1" className="quiz-radio-label">
                  <span className="quiz-radio-text">Facebook / Instagram</span>
                </label>

                <input
                  type="radio"
                  name="platform"
                  //   value="TikTok"
                  id="platform2"
                  className="quiz-radio-input"
                  required
                />
                <label htmlFor="platform2" className="quiz-radio-label">
                  <span className="quiz-radio-text">TikTok</span>
                </label>

                <input
                  type="radio"
                  name="platform"
                  //   value="Google Ads"
                  id="platform3"
                  className="quiz-radio-input"
                  required
                />
                <label htmlFor="platform3" className="quiz-radio-label">
                  <span className="quiz-radio-text">Google Ads</span>
                </label>

                <input
                  type="radio"
                  name="platform"
                  //   value="Multiple Platforms"
                  id="platform4"
                  className="quiz-radio-input"
                  required
                />
                <label htmlFor="platform4" className="quiz-radio-label">
                  <span className="quiz-radio-text">Multiple Platforms</span>
                </label>
              </div>
            </div>

            <div className="quiz-step" data-step="2">
              <h4 className="quiz-question">What niche are you in?</h4>
              <div className="quiz-input-group">
                <input
                  type="text"
                  name="niche"
                  className="quiz-input"
                  placeholder="Enter your niche (e.g., Beauty, Fashion, Tech, etc.)"
                  required
                />
              </div>
              <div className="quiz-nav">
                <button
                  type="button"
                  className="quiz-btn quiz-btn-continue"
                  onClick={nextQuizStep()}
                >
                  Continue
                </button>
              </div>
            </div>

            <div className="quiz-step" data-step="3">
              <h4 className="quiz-question">What is your website domain?</h4>
              <div className="quiz-input-group">
                <input
                  type="url"
                  name="website"
                  className="quiz-input"
                  placeholder="https://yourwebsite.com"
                  required
                />
              </div>
              <div className="quiz-nav">
                <button
                  type="button"
                  className="quiz-btn quiz-btn-continue"
                  onClick={nextQuizStep()}
                >
                  Continue
                </button>
              </div>
            </div>

            <div className="quiz-step" data-step="4">
              <h4 className="quiz-question">What's your monthly ad spend?</h4>
              <div className="quiz-input-group">
                <input
                  type="range"
                  name="adSpend"
                  id="adSpendRange"
                  className="quiz-range-input"
                  min="1000"
                  max="50000"
                  step="1000"
                  //   value="10000"
                  required
                />
                <span id="adSpendValue" className="range-value">
                  $10,000
                </span>
              </div>
              <div className="quiz-nav">
                <button
                  type="button"
                  className="quiz-btn quiz-btn-continue"
                  onClick={nextQuizStep()}
                >
                  Continue
                </button>
              </div>
            </div>

            <div className="quiz-step" data-step="5">
              <h4 className="quiz-question">Ad ROI Calculator</h4>
              <p
                style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem" }}
              >
                What performance metrics are you seeing?
              </p>

              <div className="range-group">
                <label className="range-label">Click-Through Rate (CTR)</label>
                <input
                  type="range"
                  name="ctr"
                  id="ctrRange"
                  className="quiz-range-input"
                  min="0.1"
                  max="10"
                  step="0.1"
                  //   value="2"
                  required
                />
                <span id="ctrValue" className="range-value">
                  2%
                </span>
              </div>

              <div className="range-group">
                <label className="range-label">Conversion Rate</label>
                <input
                  type="range"
                  name="conversionRate"
                  id="conversionRange"
                  className="quiz-range-input"
                  min="0.1"
                  max="10"
                  step="0.1"
                  //   value="3"
                  required
                />
                <span id="conversionValue" className="range-value">
                  3%
                </span>
              </div>

              <div className="quiz-nav">
                <button
                  type="button"
                  className="quiz-btn quiz-btn-continue"
                  onClick={nextQuizStep()}
                >
                  Continue
                </button>
              </div>
            </div>

            <div className="quiz-step" data-step="6">
              <h4 className="quiz-question">
                Last step! Where should we send your growth strategy?
              </h4>
              <div className="quiz-input-group">
                <input
                  type="text"
                  name="fullName"
                  className="quiz-input"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="quiz-input-group">
                <input
                  type="email"
                  name="email"
                  className="quiz-input"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="quiz-nav">
                <button type="submit" className="quiz-btn quiz-btn-submit">
                  Get My Growth Strategy
                </button>
              </div>
            </div>

            <div className="step-indicator">
              <span className="step-dot active"></span>
              <span className="step-dot"></span>
              <span className="step-dot"></span>
              <span className="step-dot"></span>
              <span className="step-dot"></span>
              <span className="step-dot"></span>
            </div>
          </form>

          <div className="quiz-success" id="quizSuccess">
            <div className="success-icon">
              <div className="success-checkmark"></div>
            </div>
            <h3 className="success-title">Thank You! 🎉</h3>
            <p className="success-text">
              Your personalized growth strategy is on its way to your inbox.
            </p>
            <p className="success-note">
              Please check your spam folder if you don't see it within 5
              minutes.
            </p>
            <button className="quiz-btn quiz-btn-submit" onClick={closeQuiz()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
