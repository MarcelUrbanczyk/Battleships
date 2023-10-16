export const isEveryShipDropped = (ships) => {
  return ships.every((ship) => ship.isDropped === true);
};
