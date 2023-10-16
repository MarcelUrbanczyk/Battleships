import { Ship } from "../shipInterface";

export const setIsDroppedFalse = (ships: Ship[]) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: false,
  }));
  return newShips;
};

export const setIsDroppedTrue = (ships: Ship[]) => {
  const newShips = ships.map((ship) => ({
    ...ship,
    isDropped: true,
  }));
  return newShips;
};
