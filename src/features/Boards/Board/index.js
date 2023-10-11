import { useEffect } from "react";
import {
  Container,
  Block,
  Owner,
  Wrapper,
  RandomButton,
  Buttons,
  RestartButton,
} from "./styled";
import { placeShip, placeShipsRandomly } from "../../placeShips";
import { removeShipsFromBoard } from "../../removeShipsFromBoard";

export default ({
  owner,
  board,
  setBoard,
  draggedShip,
  flip,
  ships,
  setShips,
}) => {
  const size = 10;

  useEffect(() => {
    if (owner === "Computer") {
      setBoard(placeShipsRandomly);
    }
  }, []);

  return (
    <Wrapper>
      <Owner>{owner}</Owner>
      <Container>
        {board.map((color, index) => (
          <Block
            key={index}
            id={index + 1}
            style={{ backgroundColor: color ? color : "teal" }}
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={(event) => {
              const ship = ships.find((ship) => ship.name === draggedShip.id);
              const startIndex = event.target.id - 1;
              const newBoard = placeShip(board, startIndex, ship, flip);
              setBoard([...newBoard]);
            }}
          />
        ))}
      </Container>
      <Buttons>
        {owner !== "Computer" ? (
          <>
            <RestartButton
              onClick={() => {
                setBoard(Array.from({ length: size * size }).fill(null));
                setShips(removeShipsFromBoard(ships));
              }}
            />
            <RandomButton
              onClick={() => {
                setBoard(placeShipsRandomly);
              }}
            />
          </>
        ) : (
          ""
        )}
      </Buttons>
    </Wrapper>
  );
};
