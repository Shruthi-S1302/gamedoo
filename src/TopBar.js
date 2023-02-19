import React from "react";
import TopBarStyles from "./TopBarStyles";
import fire from "./assets/icons/fire.svg";
import bell from "./assets/icons/bell.svg";
import trophy from "./assets/icons/trophy.svg";
import user from "./assets/user.png";

function TopBar() {
  return (
    <div>
      <TopBarStyles>
        <input type="text" placeholder="Search game..."></input>
        <div className="top-bar-icon-wrapper">
          <img src={fire} className="top-bar-icons" />
        </div>
        <div className="top-bar-icon-wrapper">
          <img src={bell} className="top-bar-icons" />
        </div>
        <div className="top-bar-icon-wrapper">
          <img src={trophy} className="top-bar-icons" />
          <span className="noti"></span>
        </div>
        <button
          style={{
            border: "none",
            outline: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <img src={user} className="user" />
        </button>
      </TopBarStyles>
    </div>
  );
}

export default TopBar;
