import { useEffect, useState } from "react";
import { Container, Block, Header, Wrapper } from "./styled";
import { placeShipsRandomly } from "../utils/placeShips";
import { getBlockColor } from "../utils/getBlockColor";
import { isEveryShipSunk } from "../utils/isEveryShipSunk";
import { randomHit } from "../utils/randomHit";
import { useDispatch, useSelector } from "react-redux";
import {
  setShips,
  toggleIsPlayer1Turn,
  setBoard,
  setWinner,
  selectIsGameStarted,
  selectIsGameOver,
  toggleIsGameOver,
  selectGameMode,
  toggleIsGameStarted,
  selectShips1,
  selectShips2,
  selectDraggedShip,
  selectBoard1,
  selectBoard2,
} from "../gameSlice";
import useHandleClick from "./useHandleClick";
import useHandleDropShip from "./useHandleDropShip";

export default ({ owner, ownerBoard, ownerShips, header }) => {
  const dispatch = useDispatch();
  const draggedShip = useSelector(selectDraggedShip);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const board1 = useSelector(selectBoard1);
  const board2 = useSelector(selectBoard2);
  const gameMode = useSelector(selectGameMode);
  const [counter, setCounter] = useState(0);

  const handleClick = useHandleClick();
  const handleDrop = useHandleDropShip();

  useEffect(() => {
    if (gameMode === "singleplayer") {
      dispatch(
        setBoard({ boardNumber: 2, content: [...placeShipsRandomly()] })
      );
    }
  }, []);

  useEffect(() => {
    if (gameMode !== "simulation" && owner === "Player 1") {
      const isEveryShipSunk = ships1.every((ship) => ship.isSunk === true);
      if (isEveryShipSunk) {
        dispatch(toggleIsGameOver());
        dispatch(setWinner("Player 2"));
      }
    } else if (gameMode !== "simulation" && owner === "Player 2") {
      const isEveryShipSunk = ships2.every((ship) => ship.isSunk === true);
      if (isEveryShipSunk) {
        dispatch(toggleIsGameOver());
        dispatch(setWinner("Player 1"));
      }
    }
  }, [ships1, ships2, gameMode]);

  useEffect(() => {
    if (gameMode === "simulation") {
      dispatch(
        setBoard({ boardNumber: 1, content: [...placeShipsRandomly()] })
      );
      dispatch(
        setBoard({ boardNumber: 2, content: [...placeShipsRandomly()] })
      );
    }
  }, []);

  useEffect(() => {
    if (gameMode === "simulation" && owner === "Player 1" && !isGameOver) {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);

        dispatch(toggleIsPlayer1Turn());

        if (counter % 2 === 0) {
          const newShips = randomHit("Player 1", ships1);
          dispatch(
            setShips({
              shipsNumber: 1,
              content: [...newShips],
            })
          );
        } else {
          const newShips = randomHit("Player 2", ships2);
          dispatch(
            setShips({
              shipsNumber: 2,
              content: [...newShips],
            })
          );
        }

        if (isEveryShipSunk(ships1)) {
          dispatch(setWinner("Player 2"));
          dispatch(toggleIsGameStarted());
          dispatch(toggleIsGameOver());
        } else if (isEveryShipSunk(ships2)) {
          dispatch(setWinner("Player 1"));
          dispatch(toggleIsGameStarted());
          dispatch(toggleIsGameOver());
        }
      }, 1500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [ships1, ships2, isGameOver, counter]);

  return (
    <Wrapper>
      <Header>{header ? header : owner}</Header>
      <Container>
        {ownerBoard &&
          ownerBoard.map((shipName, index) => (
            <Block
              key={index}
              id={owner === "Player 1" ? index + 1 : index + 101}
              className={`${shipName ? shipName : ""} ${owner}`}
              style={{
                backgroundColor: getBlockColor(
                  ownerShips,
                  owner === "Player 1" ? index + 1 : index + 101,
                  shipName,
                  gameMode,
                  isGameStarted
                ),
              }}
              onDragOver={(event) => {
                event.preventDefault();
              }}
              onDrop={(event) => {
                if (owner === "Player 1") {
                  handleDrop(
                    ships1,
                    draggedShip.name,
                    event.target.id,
                    board1,
                    owner
                  );
                } else {
                  handleDrop(
                    ships2,
                    draggedShip.name,
                    event.target.id,
                    board2,
                    owner
                  );
                }
              }}
              onClick={(event) => {
                if (draggedShip) {
                  if (owner === "Player 1") {
                    handleDrop(
                      ships1,
                      draggedShip.name,
                      event.target.id,
                      board1,
                      owner
                    );
                  } else {
                    handleDrop(
                      ships2,
                      draggedShip.name,
                      event.target.id,
                      board2,
                      owner
                    );
                  }
                } else {
                  handleClick(owner, event.target.classList, event.target.id);
                }
              }}
            />
          ))}
      </Container>
    </Wrapper>
  );
};
