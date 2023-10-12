export const getShipColor = (shipName, owner, ships, is) => {
  if (owner !== "Computer") {
    const ship = ships.find((ship) => ship.name === shipName);
    if (ship && ship.isSunk) {
      const color = "grey";
      return color;
    } else if (ship && !ship.isSunk) {
      const color = ship.color;
      return color;
    }
  }

  if (owner === "Computer") {
    const ship = ships.find((ship) => ship.name === shipName);
    if (ship && ship.isSunk) {
      const color = "grey";
      return color;
    } else if (ship && !ship.isSunk) {
      const color = "teal";
      return color;
    }
  }
};
