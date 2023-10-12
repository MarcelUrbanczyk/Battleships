import { initialShips } from "./initialShips";

const isPositionValid = (x, y, isVertical, shipSize, board) => {
  const size = 10;
  if (
    x < 0 ||
    x >= size ||
    y < 0 ||
    y >= size ||
    (isVertical && x + shipSize > size) ||
    (!isVertical && y + shipSize > size)
  ) {
    return false;
  }

  for (let i = 0; i < shipSize; i++) {
    const index = isVertical ? (x + i) * size + y : x * size + y + i;

    if (board[index] !== null) {
      return false;
    }
  }

  return true;
};

export const placeShip = (board, startIndex, ship, isVertical) => {
  const size = Math.sqrt(board.length);

  const x = Math.floor(startIndex / size);
  const y = startIndex % size;

  if (isPositionValid(x, y, isVertical, ship.size, board)) {
    for (let i = 0; i < ship.size; i++) {
      const shipName = ship.name;
      const shipIndex = isVertical ? (x + i) * size + y : x * size + y + i;
      board[shipIndex] = ship.name;
    }
    ship.isDropped = true;
  }
  return board;
};

export const placeShipsRandomly = () => {
  const size = 10;
  const newBoard = Array(size * size).fill(null);

  for (const [index, ship] of initialShips.entries()) {
    let isValidPlacement = false;
    let x, y, isVertical;

    while (!isValidPlacement) {
      isVertical = Math.random() < 0.5;
      x = Math.floor(Math.random() * size);
      y = Math.floor(Math.random() * size);

      isValidPlacement = isPositionValid(x, y, isVertical, ship.size, newBoard);
    }

    for (let i = 0; i < ship.size; i++) {
      const shipName = ship.name;
      const shipIndex = isVertical ? (x + i) * size + y : x * size + y + i;
      newBoard[shipIndex] = shipName;
    }
  }
  return newBoard;
};
