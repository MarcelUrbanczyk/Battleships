export const getShipByName = (ships, shipName) => {
  return ships.find((ship) => ship.name === shipName);
};

export const getShipByElement = (ships, element) => {
  const shipNames = ships.map((ship) => ship.name);
  const elementClassList = element.classList;

  for (const name of shipNames) {
    if (elementClassList.contains(name)) {
      const ship = getShipByName(ships, name);
      return ship;
    }
  }
  return null;
};
