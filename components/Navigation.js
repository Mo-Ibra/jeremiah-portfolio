const Navigation = () => {
  return (
    <div className="nav-outer-wrapper">
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo-area" onclick="scrollToSection('hero')">
            <svg
              className="brand-logo"
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="20" fill="currentColor" />
              <g transform="translate(50, 50) scale(0.6) translate(-50, -50)">
                <path d="M50 20 L25 55 L45 55 Z" fill="white" />
                <path d="M52 25 L52 55 L70 55 Z" fill="white" />
                <path
                  d="M30 60 C30 60 35 65 50 65 C65 65 70 60 70 60 L25 60 C25 60 27.5 62.5 30 60 Z"
                  fill="white"
                />
                <path
                  d="M20 70 Q30 75 40 70 Q50 75 60 70 Q70 75 80 70"
                  stroke="white"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M25 75 Q35 80 45 75 Q55 80 65 75 Q75 80 85 75"
                  stroke="white"
                  stroke-width="2"
                  fill="none"
                />
              </g>
            </svg>
            <div className="brand-text">
              <h1>Jeremiah Harcharran.</h1>
              <p>Performance Creative Architect</p>
            </div>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#principles">Principles</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta">
                Let's Talk
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu-toggle"
            id="mobileMenuToggle"
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
