class Ship {
  name: string;
  size: number;
  color: string;
  isDropped: boolean;
  isSunk: boolean;
  constructor(name, size, color) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.isDropped = false;
    this.isSunk = false;
  }
}
export const initialShips = [
  new Ship("Thunder", 5, "blue"),
  new Ship("Destroyer", 4, "yellow"),
  new Ship("Wrecker", 3, "green"),
  new Ship("Liberty", 3, "orange"),
  new Ship("Sapphire", 2, "purple"),
];
