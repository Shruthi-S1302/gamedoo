import React from "react";
import game from "./assets/game.png";
import SideTextStyle from "./SideTextStyle";
import heart from "./assets/icons/heart.svg";
import download from "./assets/icons/download.svg";
import Star from "./assets/Star.svg";
import Awards from "./assets/Awards.svg";

function SideText() {
  return (
    <div>
      <SideTextStyle>
        <img src={game} className="game" />
        <div className="head">
          <h4>Nocturnal</h4>
          <img src={heart} />
          <p>233</p>
          <img src={download} />
          <p>146k</p>
        </div>
        <p className="content">
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge… <br />
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge… KeyCars is a free (multiplayer
          only) game where each player can play using a single key on a
          keyboard. Press a key to join, then hold that key to turn the vehicle.
          Clash into players, shoot projectiles or trick them into driving off
          the ledge… <br />
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge… KeyCars is a free (multiplayer
          only) game where each player can play using a single key on a
          keyboard. Press a key to join, then hold that key to turn the vehicle.
          Clash into players, shoot projectiles or trick them into driving off
          the ledge…
        </p>
        <div className="bottom">
          <img src={Star} />
          <img src={Awards} />
        </div>
      </SideTextStyle>
    </div>
  );
}

export default SideText;
