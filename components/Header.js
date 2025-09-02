const Header = ({ badgeText, marginBottom = "3rem", children }) => {
  return (
    <div className="main-header" style={{ marginBottom: marginBottom }}>
      <div className="success-badge">
        <span className="label-dot"></span>
        { badgeText }
      </div>
      { children }
    </div>
  );
};

export default Header;