import { getShipByName } from "./getShip";

export const getBlockColor = (ships, id, shipName, gameMode, isGameStarted) => {
  const ship = getShipByName(ships, shipName);
  const block = document.getElementById(id);

  if (!ship && block && block.classList.contains("hit")) {
    return "grey";
  } else if (ship && block && block.classList.contains("hit")) {
    return "red";
  } else if (
    (ship &&
      block &&
      id <= 100 &&
      gameMode !== "multiplayer" &&
      !isGameStarted) ||
    (ship && block && id <= 100 && gameMode === "singleplayer") ||
    (ship && block && gameMode === "simulation") ||
    (ship && block && gameMode === "multiplayer" && !isGameStarted)
  ) {
    return ship.color;
  }
};
