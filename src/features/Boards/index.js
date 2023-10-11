import { Wrapper } from "./styled";
import Board from "./Board";
export default ({
  board1,
  board2,
  setBoard1,
  setBoard2,
  draggedShip,
  flip,
  ships1,
  ships2,
  setShips1,
  setShips2,
}) => (
  <Wrapper>
    <Board
      owner="Player 1"
      draggedShip={draggedShip}
      board={board1}
      setBoard={setBoard1}
      flip={flip}
      ships={ships1}
      setShips={setShips1}
    />
    <Board
      owner="Computer"
      board={board2}
      setBoard={setBoard2}
      ships={ships2}
      setShips={setShips2}
    />
  </Wrapper>
);
