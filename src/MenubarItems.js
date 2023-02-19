import dashboard from "./assets/icons/dashboard.svg";
import game_store from "./assets/icons/game_store.svg";
import tv from "./assets/icons/tv.svg";
import team from "./assets/icons/team.svg";
import badges from "./assets/icons/badges.svg";
import library from "./assets/icons/library.svg";
import trophies from "./assets/icons/trophies.svg";

const MenubarItems = [
  {
    label: "Game Store",
    id: "#game_store",
    icon: game_store,
    notifications: 0,
  },
  {
    label: "Live Stream TV",
    id: "#tv",
    icon: tv,
    notifications: 0,
  },

  {
    label: "Teams Members",
    id: "#team",
    icon: team,
    notifications: 0,
  },

  {
    label: "Badges",
    id: "#badges",
    icon: badges,
    notifications: 0,
  },

  {
    label: "My Library",
    id: "#library",
    icon: library,
    notifications: 2,
  },

  {
    label: "Trophies",
    id: "#trophies",
    icon: trophies,
    notifications: 7,
  },
];

export default MenubarItems;
