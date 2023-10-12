export const getShipByName = (ships, shipName) => {
  ships.find((ship) => ship.name === shipName);
};
