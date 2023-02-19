import React from "react";
import game from "./assets/game.png";
import PopularGamesStyles from "./PopularGamesStyles";
import heart from "./assets/icons/grey_heart.svg";
import download from "./assets/icons/grey_download.svg";
import ios from "./assets/icons/IOS.svg";
import windows from "./assets/icons/Window.svg";
import play from "./assets/icons/GooglePlay.svg";

function PopularGames(props) {
  return (
    <a>
      <div className="card">
        <PopularGamesStyles
          style={{
            background: props.isFirstCard ? "#301C57" : "#FAFBFC",
            color: props.isFirstCard ? "#FFF" : "#787686",
          }}
        >
          <img src={game} className="card-game" />
          <div className="head">
            <h4
              style={{
                display: "inline",
                color: props.isFirstCard ? "#FFF" : "#000",
              }}
            >
              {props.name}
            </h4>
            <img
              src={heart}
              style={{ display: "inline", marginLeft: "10px" }}
            />
            <p style={{ display: "inline", marginLeft: "5px" }}>
              {props.likes}
            </p>
            <img
              src={download}
              style={{ display: "inline", marginLeft: "10px" }}
            />
            <p style={{ display: "inline", marginLeft: "5px" }}>{props.down}</p>
          </div>
          <p className="content">{props.desc}</p>
          <div className="bottom">
            <img src={windows} />
            <img src={ios} />
            <img src={play} />
            <button>Download</button>
          </div>
        </PopularGamesStyles>
      </div>
    </a>
  );
}

export default PopularGames;
