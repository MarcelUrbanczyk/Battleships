import { Wrapper } from "./styled";
import Board from "./Board";
export default ({
  board1,
  board2,
  draggedShip,
  flip,
  ships1,
  ships2,
  isPlayer1Turn,
  isGameStarted,
  isGameOver,
  setGameState,
  gameState,
}) => (
  <Wrapper>
    <Board
      owner="Player 1"
      draggedShip={draggedShip}
      board1={board1}
      board2={board2}
      board={board1}
      flip={flip}
      ships1={ships1}
      ships2={ships2}
      ownerShips={ships1}
      isPlayer1Turn={isPlayer1Turn}
      isGameStarted={isGameStarted}
      isGameOver={isGameOver}
      setGameState={setGameState}
      gameState={gameState}
    />
    <Board
      owner="Computer"
      board1={board1}
      board2={board2}
      board={board2}
      ships1={ships1}
      ships2={ships2}
      ownerShips={ships2}
      isPlayer1Turn={isPlayer1Turn}
      isGameStarted={isGameStarted}
      isGameOver={isGameOver}
      setGameState={setGameState}
      gameState={gameState}
    />
  </Wrapper>
);
