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
import { setIsDroppedFalse, setIsDroppedTrue } from "../../setIsDropped";
import { isEveryShipDropped } from "../../isEveryShipDropped";
import { getShipColor } from "../../getShipColor";
import { setShipSunk } from "../../setShipSunk";
import { getShipByName } from "../../getShipByName";
import { initialShips } from "../../initialShips";
import { initialBoard } from "../../initialBoard";

export default ({
  owner,
  board1,
  board2,
  board,
  draggedShip,
  flip,
  ships1,
  ships2,
  ships,
  isPlayer1Turn,
  isGameStarted,
  isGameOver,
  gameState,
  setGameState,
}) => {
  const size = 10;

  useEffect(() => {
    if (owner === "Computer") {
      setGameState({ ...gameState, board2: placeShipsRandomly() });
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
            className={`${shipName ? shipName : ""} ${owner}`}
            style={{
              backgroundColor: getShipColor(
                shipName,
                owner,
                ships,
                isGameStarted
              ),
            }}
            onDragOver={(event) => {
              if (owner !== "Computer") {
                event.preventDefault();
              }
            }}
            onDrop={(event) => {
              if (owner !== "Computer") {
                const ship = getShipByName(ships, draggedShip.id);
                const startIndex = event.target.id - 1;
                const newBoard = placeShip(board, startIndex, ship, flip);
                if (owner === "Player 1") {
                  setGameState({ ...gameState, board1: [...newBoard] });
                } else {
                  setGameState({ ...gameState, board2: [...newBoard] });
                }
              }
            }}
            onClick={(event) => {
              if (isGameStarted && owner === "Computer") {
                event.target.classList.add("hit");

                setGameState({
                  ...gameState,
                  ships2: [
                    ...setShipSunk(event.target.classList, owner, ships),
                  ],
                });
              }
            }}
          />
        ))}
      </Container>
      <Buttons>
        {owner !== "Computer" && !isGameStarted ? (
          <>
            <RestartButton
              onClick={() => {
                if (owner === "Player 1") {
                  setGameState({
                    ...gameState,
                    board1: [...initialBoard],
                    ships1: setIsDroppedFalse([...initialShips]),
                  });
                } else {
                  setGameState({
                    ...gameState,
                    board2: [...initialBoard],
                    ships2: setIsDroppedFalse([...initialShips]),
                  });
                }
              }}
            />
            <ReadyButton
              disabled={!isEveryShipDropped(ships)}
              onClick={() => {
                setGameState({ ...gameState, isGameStarted: true });
              }}
            >
              Ready
            </ReadyButton>
            <RandomButton
              onClick={() => {
                if (owner === "Player 1") {
                  setGameState({
                    ...gameState,
                    board1: placeShipsRandomly(),
                    ships1: setIsDroppedTrue([...initialShips]),
                  });
                } else {
                  setGameState({
                    ...gameState,
                    board2: placeShipsRandomly(),
                    ships2: setIsDroppedTrue([...initialShips]),
                  });
                }
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
