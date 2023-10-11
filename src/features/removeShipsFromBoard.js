export const removeShipsFromBoard = (ships) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: false,
  }));
  return newShips;
};
