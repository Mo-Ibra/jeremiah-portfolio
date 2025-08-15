const Footer = () => {
  
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; {getCurrentYear()} Jeremiah Harcharran. All rights
          reserved.
        </p>
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