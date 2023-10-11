import { Header } from "../common/header";
import { Main } from "../common/main";
import Boards from "../features/Boards";
import ShipCollection from "../features/ShipCollection";
import { useState } from "react";

const App = () => {
  const size = 10;

  const [flip, setFlip] = useState(false);

  const [draggedShip, setDraggedShip] = useState(null);

  const [firstBoard, setFirstBoard] = useState(
    Array.from({ length: size * size }).fill(null)
  );

  const [secondBoard, setSecondBoard] = useState(
    Array.from({ length: size * size }).fill(null)
  );

  return (
    <>
      <Header>Battleships</Header>
      <Main>
        <Boards
          firstBoard={firstBoard}
          secondBoard={secondBoard}
          setFirstBoard={setFirstBoard}
          setSecondBoard={setSecondBoard}
          draggedShip={draggedShip}
          flip={flip}
        />
        <ShipCollection
          setDraggedShip={setDraggedShip}
          flip={flip}
          setFlip={setFlip}
        />
      </Main>
    </>
  );
};

export default App;
