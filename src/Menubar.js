import React from "react";
import logo from "./assets/Logo.svg";
import Path from "./assets/icons/Path.svg";
import { MenubarStyle } from "./MenubarStyles";
import MenubarItems from "./MenubarItems";
import dashboard from "./assets/icons/dashboard.svg";

function Menubar() {
  return (
    <MenubarStyle>
      <img src={logo} className="logo" />
      <ul>
        <li id="current-page">
          <img src={dashboard} />
          <a href="#">Dashboard</a>
        </li>
        {MenubarItems.map((item) => {
          return (
            <div className="nav-ele">
              <li key={item.id} className="list">
                <img src={item.icon} className="icon" />
                <a href={item.id}>
                  {item.label}
                  {item.notifications > 0 ? (
                    <span className="noti">{item.notifications}</span>
                  ) : null}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="button-container">
        <button className="log-out">
          <div className="logout-wrapper">
            <img src={Path} className="svg" />
            <span>Log Out</span>
          </div>
        </button>
      </div>
    </MenubarStyle>
  );
}

export default Menubar;
