export const getShipByName = (ships, shipName) => {
  return ships.find((ship) => ship.name === shipName);
};
