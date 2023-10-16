import { Ship } from "../shipInterface";

export const isEveryShipDropped = (ships: Ship[]) => {
  return ships.every((ship) => ship.isDropped === true);
};
