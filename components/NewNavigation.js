"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <div className="brand-icon">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={50}
              height={50}
              className="brand-logo"
            />
          </div>
          <div className="brand-text">
            <h1 className="brand-name">Jeremiah Harcharran.</h1>
            <p className="brand-tagline">Performance Creative Partner</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <Link href="#hero" className="nav-link">
            Home
          </Link>
          <Link href="#services" className="nav-link">
            Services
          </Link>
          <Link href="#portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#principles" className="nav-link">
            Process
          </Link>
          <Link href="#faqs" className="nav-link">
            FAQs
          </Link>
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <Link href="#contact" className="cta-button">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <Link
            href="#hero"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/process"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Process
          </Link>
          <Link
            href="#contact"
            className="mobile-cta-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Meeting
          </Link>
        </div>
      </div>
    </nav>
  );
}
