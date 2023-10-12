import { Header } from "../common/header";
import { Main } from "../common/main";
import Boards from "../features/Boards";
import ShipCollection from "../features/ShipCollection";
import { useState } from "react";
import { initialShips } from "../features/initialShips";
import { initialBoard } from "../features/initialBoard";

const App = () => {
  const [gameState, setGameState] = useState({
    ships1: [...initialShips],
    ships2: [...initialShips],
    isGameStarted: false,
    isGameOver: false,
    isPlayer1Turn: false,
    flip: false,
    draggedShip: null,
    board1: [...initialBoard],
    board2: [...initialBoard],
  });

  console.log(gameState);

  const {
    ships1,
    ships2,
    isGameStarted,
    isGameOver,
    isPlayer1Turn,
    flip,
    draggedShip,
    board1,
    board2,
  } = gameState;

  return (
    <>
      <Header>Battleships</Header>
      <Main>
        <Boards
          board1={board1}
          board2={board2}
          draggedShip={draggedShip}
          flip={flip}
          ships1={ships1}
          ships2={ships2}
          isPlayer1Turn={isPlayer1Turn}
          isGameStarted={isGameStarted}
          isGameOver={isGameOver}
          gameState={gameState}
          setGameState={setGameState}
        />
        <ShipCollection
          flip={flip}
          ships={ships1}
          gameState={gameState}
          setGameState={setGameState}
        />
      </Main>
    </>
  );
};

export default App;
