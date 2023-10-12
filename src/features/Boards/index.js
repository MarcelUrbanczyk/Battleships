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
  isPlayer1Turn,
  setIsPlayer1Turn,
  isGameStarted,
  setIsGameStarted,
  isGameOver,
  setIsGameOver,
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
      isPlayer1Turn={isPlayer1Turn}
      setIsPlayer1Turn={setIsPlayer1Turn}
      isGameStarted={isGameStarted}
      setIsGameStarted={setIsGameStarted}
      isGameOver={isGameOver}
      setIsGameOver={setIsGameOver}
    />
    <Board
      owner="Computer"
      board={board2}
      setBoard={setBoard2}
      ships={ships2}
      setShips={setShips2}
      isPlayer1Turn={isPlayer1Turn}
      setIsPlayer1Turn={setIsPlayer1Turn}
      isGameStarted={isGameStarted}
      setIsGameStarted={setIsGameStarted}
      isGameOver={isGameOver}
      setIsGameOver={setIsGameOver}
    />
  </Wrapper>
);
