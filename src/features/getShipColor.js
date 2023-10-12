import { initialShips } from "./ships";

export const getShipColor = (shipName, owner) => {
  if (owner !== "Computer") {
    const ship = initialShips.find((ship) => ship.name === shipName);
    if (ship) {
      const color = ship.color;
      return color;
    }
  }
  return;
};
