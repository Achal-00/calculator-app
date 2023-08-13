const Header = () => {
  return (
    <div className="header-container">
      <div className="left-side">
        <h1>calc</h1>
      </div>
      <div className="right-side">
        <p>THEME</p>
        <div className="theme-changer">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <div className="theme-changer-background"></div>
          <div className="theme-1">
            <span></span>
          </div>
          <div className="theme-2">
            <span></span>
          </div>
          <div className="theme-3">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
