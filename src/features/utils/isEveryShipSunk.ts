import { Ship } from "../shipInterface";

export const isEveryShipSunk = (ships: Ship[]) => {
  return ships.every((ship) => ship.isSunk === true);
};
