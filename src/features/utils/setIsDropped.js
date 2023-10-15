export const setIsDroppedFalse = (ships) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: false,
  }));
  return newShips;
};

export const setIsDroppedTrue = (ships) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: true,
  }));
  return newShips;
};
