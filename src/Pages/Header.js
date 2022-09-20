import React, { useContext } from "react";
import { ThemeContext } from "./Context";

function Header() {
  const { isToggle, setIsToggle } = useContext(ThemeContext);
  return (
    <div className={isToggle ? "light-mode" : "dark-mode"}>
      <div className="header">
        <div className="header_txt">
          <h2>Where in the World?</h2>
        </div>
        <div className="theme_mode">
          <p
            className="app_theme"
            onClick={() => setIsToggle((isToggle) => !isToggle)}
          >
            <i className="fa-regular fa-moon"></i>
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
