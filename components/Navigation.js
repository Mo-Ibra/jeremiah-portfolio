"use client";

import Image from "next/image";
import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    function initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            const navHeight = document.getElementById("navbar").offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        });
      });
    }

    function initMobileMenu() {
      const mobileMenuToggle = document.getElementById("mobileMenuToggle");
      const navLinks = document.querySelector(".nav-links");
      const nav = document.getElementById("navbar");

      mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

        document.body.style.overflow = navLinks.classList.contains("active")
          ? "hidden"
          : "";
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenuToggle.classList.remove("active");
          navLinks.classList.remove("active");
          document.body.style.overflow = "";
        });
      });

      document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains("active")) {
          mobileMenuToggle.classList.remove("active");
          navLinks.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }

    function initScrollEffects() {
      const navbar = document.getElementById("navbar");
      const navLinks = document.querySelector(".nav-links");
      const sections = document.querySelectorAll("section");
      let ticking = false;

      function updateScrollEffects() {
        const scrolled = window.scrollY;

        if (scrolled > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        const navHeight = navbar.offsetHeight;
        const scrollPosition = scrolled + navHeight + 100;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            if (sectionId === "contact") {
              navbar.classList.add("dark-section");
            } else {
              navbar.classList.remove("dark-section");
            }

            navLinks.querySelectorAll("a").forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === "#" + sectionId) {
                link.classList.add("active");
              }
            });
          }
        });

        ticking = false;
      }

      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollEffects);
          ticking = true;
        }
      });
    }

    // Initialize functions
    initSmoothScroll();
    initMobileMenu();
    initScrollEffects();
  }, []);

  const scrollToSection = () => {
    console.log("Scroll to section: I will add it....");
  };

  return (
    <div className="nav-outer-wrapper">
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo-area" onClick={scrollToSection("hero")}>
            <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
            <div className="brand-text">
              <h1>Jeremiah Harcharran.</h1>
              <p>Performance Creative Partner</p>
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
                Let&apos;s Talk
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
