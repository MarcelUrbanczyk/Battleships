import { useEffect } from "react";
import { Container, Block, Owner, Wrapper, RandomButton } from "./styled";
import { placeShip, placeShipsRandomly } from "../../placeShips";
import { ships } from "../../ships";

export default ({ owner, board, setBoard, draggedShip, flip }) => {
  console.log(flip);

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
      {owner !== "Computer" ? (
        <RandomButton
          onClick={() => {
            setBoard(placeShipsRandomly);
          }}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};
