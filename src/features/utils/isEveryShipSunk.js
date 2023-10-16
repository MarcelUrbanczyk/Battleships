export const isEveryShipSunk = (ships) => {
  return ships.every((ship) => ship.isSunk === true);
};
