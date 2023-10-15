export const getBlockColor = (ships, id, shipName, gameMode) => {
  const ship = ships.find((ship) => ship.name === shipName);
  const block = document.getElementById(id);

  if (!ship && block && block.classList.contains("hit")) {
    return "grey";
  } else if (ship && block && block.classList.contains("hit")) {
    return "red";
  } else if (
    (ship && block && id <= 100) ||
    (ship && block && gameMode === "simulation")
  ) {
    return ship.color;
  }
};
