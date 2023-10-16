import { initialBoard } from "./initialBoard";
import { initialShips } from "./initialShips";

export const initialState = {
  ships1: initialShips.map((ship) => ({
    name: ship.name,
    size: ship.size,
    color: ship.color,
    isDropped: false,
    isSunk: false,
  })),
  ships2: initialShips.map((ship) => ({
    name: ship.name,
    size: ship.size,
    color: ship.color,
    isDropped: false,
    isSunk: false,
  })),

  board1: [...initialBoard],
  board2: [...initialBoard],

  winner: null,
  gameMode: null,
  isPlayer1BoardSet: false,
  isPlayer2BoardSet: false,
  isGameStarted: false,
  isGameOver: false,
  isPlayer1Turn: true,
  flip: false,
  draggedShip: null,
};
