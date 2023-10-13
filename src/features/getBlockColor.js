export const getBlockColor = (owner, ships, id, shipName) => {
  const block = document.getElementById(`${id}`);

  const ship = ships.find((ship) => ship.name === shipName);

  if (owner === "Player2") {
    if (ship && block.classList.contains(`hit`)) {
      const color = "red";
      return color;
    } else if (ship && !ship.isSunk) {
      const color = ship.color;
      return color;
    } else if (!ship && block && block.classList.contains(`hit`)) {
      const color = "grey";
      return color;
    }
  }

  if (owner === "Player1") {
    if (ship && block.classList.contains(`hit`)) {
      const color = "red";
      return color;
    } else if (ship && !ship.isSunk) {
      const color = ship.color;
      return color;
    } else if (!ship && block && block.classList.contains(`hit`)) {
      const color = "grey";
      return color;
    }
  }
};
