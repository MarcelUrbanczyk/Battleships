import { Header } from "../common/header";
import { Main } from "../common/main";
import Boards from "../features/Boards";
import ShipCollection from "../features/ShipCollection";
import { useState } from "react";
import { initialShips } from "../features/ships";

const App = () => {
  const size = 10;

  const [ships1, setShips1] = useState([...initialShips]);
  const [ships2, setShips2] = useState([...initialShips]);

  const [flip, setFlip] = useState(false);

  const [draggedShip, setDraggedShip] = useState(null);

  const [board1, setBoard1] = useState(
    Array.from({ length: size * size }).fill(null)
  );

  const [board2, setBoard2] = useState(
    Array.from({ length: size * size }).fill(null)
  );

  return (
    <>
      <Header>Battleships</Header>
      <Main>
        <Boards
          board1={board1}
          board2={board2}
          setBoard1={setBoard1}
          setBoard2={setBoard2}
          draggedShip={draggedShip}
          flip={flip}
          ships1={ships1}
          ships2={ships2}
          setShips1={setShips1}
          setShips2={setShips2}
        />
        <ShipCollection
          setDraggedShip={setDraggedShip}
          flip={flip}
          setFlip={setFlip}
          ships={ships1}
        />
      </Main>
    </>
  );
};

export default App;
