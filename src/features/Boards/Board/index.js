import { useEffect } from "react";
import {
  Container,
  Block,
  Owner,
  Wrapper,
  RandomButton,
  Buttons,
  RestartButton,
  ReadyButton,
} from "./styled";
import { placeShip, placeShipsRandomly } from "../../placeShips";
import { setIsDroppedTrue } from "../../setIsDropped";
import { isEveryShipDropped } from "../../isEveryShipDropped";
import { getShipColor } from "../../getShipColor";
import { setShipSunk } from "../../setShipSunk";
import { getShipByName } from "../../getShipByName";
import { initialShips } from "../../ships";

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
        {board.map((shipName, index) => (
          <Block
            key={index}
            id={index + 1}
            className={`${shipName} ${owner}`}
            style={{ backgroundColor: getShipColor(shipName, owner, ships) }}
            onDragOver={(event) => {
              if (owner !== "Computer") {
                event.preventDefault();
              }
            }}
            onDrop={(event) => {
              if (owner !== "Computer") {
                const ship = getShipByName(draggedShip.id);
                const startIndex = event.target.id - 1;
                const newBoard = placeShip(board, startIndex, ship, flip);
                setBoard([...newBoard]);
              }
            }}
            onClick={(event) => {
              event.target.classList.add("hit");
              setShips([...setShipSunk(event.target.classList, owner, ships)]);
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
                setShips([...initialShips]);
              }}
            />
            <ReadyButton disabled={!isEveryShipDropped(ships)}>
              Ready
            </ReadyButton>
            <RandomButton
              onClick={() => {
                setBoard(placeShipsRandomly);
                setShips(setIsDroppedTrue([...initialShips]));
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
