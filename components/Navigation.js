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
      const nav = document.getElementById("navbar");
      let isMenuOpen = false;

      function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle active class for button animation
        mobileMenuToggle.classList.toggle("active", isMenuOpen);
        
        // Toggle mobile menu active class for nav expansion
        nav.classList.toggle("mobile-menu-active", isMenuOpen);

        // Handle body scroll - prevent scrolling when menu is open
        if (isMenuOpen) {
          document.body.style.overflow = "hidden";
          // Add a small delay to ensure smooth animation
          setTimeout(() => {
            nav.style.zIndex = "1001";
          }, 100);
        } else {
          document.body.style.overflow = "";
          nav.style.zIndex = "1000";
        }
      }

      function closeMenu() {
        if (isMenuOpen) {
          isMenuOpen = false;
          mobileMenuToggle.classList.remove("active");
          nav.classList.remove("mobile-menu-active");
          document.body.style.overflow = "";
          nav.style.zIndex = "1000";
        }
      }

      mobileMenuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
      });

      // Close menu when clicking on nav links
      nav.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          closeMenu();
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && isMenuOpen) {
          closeMenu();
        }
      });

      // Close menu on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isMenuOpen) {
          closeMenu();
        }
      });

      // Handle window resize - close menu if switching to desktop
      window.addEventListener("resize", () => {
        if (window.innerWidth > 920 && isMenuOpen) {
          closeMenu();
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

      // Close mobile menu on scroll (but only if scrolling distance is significant)
      let lastScrollTop = 0;
      window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only close menu if user scrolled more than 50px
        if (Math.abs(currentScroll - lastScrollTop) > 50 && navbar.classList.contains("mobile-menu-active")) {
          mobileMenuToggle.classList.remove("active");
          navbar.classList.remove("mobile-menu-active");
          document.body.style.overflow = "";
          navbar.style.zIndex = "1000";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });
    }

    // Initialize functions
    initSmoothScroll();
    initMobileMenu();
    initScrollEffects();
  }, []);

  const scrollToSection = (section) => {
    const target = document.getElementById(section);
    if (target) {
      const navHeight = document.getElementById("navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="nav-outer-wrapper">
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo-area" onClick={() => scrollToSection("hero")}>
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={50}
              height={50}
              className="brand-logo"
            />
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
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#principles">Process</a>
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