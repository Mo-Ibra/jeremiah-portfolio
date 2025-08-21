import { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function getDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  return (
    <footer>
      <div className="footer-content">
        <p className="footer-time">{getDate()} - {time}</p>
        <p>Local time in London, United Kingdom</p>

        {/* 🌐 Social Icons */}
        <div className="footer-socials">
          <a
            href="https://linkedin.com/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p>&copy; {getCurrentYear()} Jeremiah Harcharran. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="mailto:jeremiah@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
