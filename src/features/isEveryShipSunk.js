export const isEveryShipSunk = (ships) => {
  return ships.every((ship) => ship.isDropped === true);
};
