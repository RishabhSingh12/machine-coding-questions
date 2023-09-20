import React from "react";
import { sideMenuData } from "../../constants";

const Sidebar = () => {
  return (
    <aside className="side-section">
      <div className="side-menu-options">
        {sideMenuData.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`side-menu-container ${
                idx === 1 ? "selected-option" : ""
              }`}
            >
              <div className="side-icon-container">
                <img src={ele.image} />
              </div>
              <p className="menu-text">{ele.text}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
