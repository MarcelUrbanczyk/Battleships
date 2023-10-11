import { Wrapper } from "./styled";
import Board from "./Board";
export default ({
  firstBoard,
  secondBoard,
  setFirstBoard,
  setSecondBoard,
  draggedShip,
  flip,
}) => (
  <Wrapper>
    <Board
      owner="Player 1"
      draggedShip={draggedShip}
      board={firstBoard}
      setBoard={setFirstBoard}
      flip={flip}
    />
    <Board owner="Computer" board={secondBoard} setBoard={setSecondBoard} />
  </Wrapper>
);
