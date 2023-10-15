import { useEffect, useState } from "react";
import { Container, Block, Owner, Wrapper } from "./styled";
import { placeShip, placeShipsRandomly } from "../utils/placeShips";
import { getBlockColor } from "../utils/getBlockColor";
import { setShipSunk } from "../utils/setShipSunk";
import { getShipByName } from "../utils/getShip";
import { isEveryShipSunk } from "../utils/isEveryShipSunk";
import { randomHit } from "../utils/randomHit";
import { useDispatch, useSelector } from "react-redux";
import {
  setShips,
  toggleIsPlayer1Turn,
  setBoard,
  setWinner,
  selectDraggedShip,
  selectFlip,
  selectIsGameStarted,
  selectIsPlayer1Turn,
  selectIsGameOver,
  toggleIsGameOver,
  selectGameMode,
  toggleIsGameStarted,
  selectShips1,
  selectShips2,
  selectWinner,
} from "../gameSlice";

export default ({ owner, enemy, ownerBoard, ownerShips }) => {
  const dispatch = useDispatch();
  const draggedShip = useSelector(selectDraggedShip);
  const flip = useSelector(selectFlip);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const isPlayer1Turn = useSelector(selectIsPlayer1Turn);
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const gameMode = useSelector(selectGameMode);
  console.log(isGameOver);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (gameMode === "singleplayer") {
      dispatch(
        setBoard({ boardNumber: 2, content: [...placeShipsRandomly()] })
      );
    }
  }, []);

  useEffect(() => {
    if (gameMode !== "simulation") {
      const isEveryShipSunk = ownerShips.every((ship) => ship.isSunk === true);
      if (isEveryShipSunk) {
        dispatch(toggleIsGameOver());
        dispatch(setWinner(enemy));
      }
    }
  }, [ownerShips, gameMode]);

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
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [ships1, ships2, isGameOver, counter]);

  return (
    <Wrapper>
      <Owner>{owner}</Owner>
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
                  gameMode
                ),
              }}
              onDragOver={(event) => {
                event.preventDefault();
              }}
              onDrop={(event) => {
                const ship = getShipByName(ownerShips, draggedShip.name);
                const shipIndex = ownerShips.findIndex(
                  (ship) => ship.name === draggedShip.name
                );
                const newShips = [...ownerShips];
                newShips[shipIndex] = {
                  ...newShips[shipIndex],
                  isDropped: true,
                };

                const startIndex = event.target.id - 1;
                const oldBoard = [...ownerBoard];
                const newBoard = placeShip(oldBoard, startIndex, ship, flip);
                if (owner === "Player1") {
                  dispatch(
                    setBoard({ boardNumber: 1, content: [...newBoard] })
                  );
                  dispatch(
                    setShips({ shipsNumber: 1, content: [...newShips] })
                  );
                } else {
                  dispatch(
                    setBoard({ boardNumber: 2, content: [...newBoard] })
                  );
                  dispatch(
                    setShips({ shipsNumber: 2, content: [...newShips] })
                  );
                }
              }}
              onClick={(event) => {
                if (
                  isGameStarted &&
                  owner === "Player 2" &&
                  isPlayer1Turn &&
                  !event.target.classList.contains("hit") &&
                  !isGameOver &&
                  gameMode !== "simulation"
                ) {
                  event.target.classList.add("hit");
                  const newShips = setShipSunk(
                    event.target.classList,
                    owner,
                    ownerShips
                  );
                  setTimeout(() => {
                    dispatch(toggleIsPlayer1Turn());
                    setShips({
                      shipsNumber: 1,
                      content: [...randomHit("Player 1", ships1)],
                    });
                  }, 2000);
                  dispatch(toggleIsPlayer1Turn());
                }
              }}
            />
          ))}
      </Container>
    </Wrapper>
  );
};
