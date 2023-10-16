import { Ship } from "../shipInterface";

export const getBlockColor = (
  ships: Ship[],
  id: number,
  shipName: string,
  gameMode: string,
  isGameStarted: boolean
) => {
  const ship = ships.find((ship) => ship.name === shipName);
  const block = document.getElementById(id.toString());

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
