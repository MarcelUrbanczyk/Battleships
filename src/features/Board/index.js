import { useEffect } from "react";
import { Container, Block, Owner, Wrapper } from "./styled";
import { placeShip, placeShipsRandomly } from "../placeShips";
import { getBlockColor } from "../getBlockColor";
import { setShipSunk } from "../setShipSunk";
import { getShipByName } from "../getShip";
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
} from "../gameSlice";
import { randomHit } from "../randomHit";

export default ({ owner, enemy, ownerBoard, ownerShips }) => {
  const dispatch = useDispatch();
  const draggedShip = useSelector(selectDraggedShip);
  const flip = useSelector(selectFlip);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const isPlayer1Turn = useSelector(selectIsPlayer1Turn);

  useEffect(() => {
    if (owner === "Player2") {
      const randomBoard = placeShipsRandomly();
      dispatch(setBoard({ boardNumber: 2, content: [...randomBoard] }));
    }
  }, []);

  useEffect(() => {
    const isEveryShipSunk = ownerShips.every((ship) => ship.isSunk === true);
    if (isEveryShipSunk) {
      dispatch(toggleIsGameOver());
      dispatch(setWinner(enemy));
    }
  }, [ownerShips]);

  return (
    <Wrapper>
      <Owner>{owner}</Owner>
      <Container>
        {ownerBoard &&
          ownerBoard.map((shipName, index) => (
            <Block
              key={index}
              id={owner === "Player1" ? index + 1 : index + 101}
              className={`${shipName ? shipName : ""} ${owner}`}
              style={{
                backgroundColor: getBlockColor(
                  ownerShips,
                  owner === "Player1" ? index + 1 : index + 101,
                  shipName
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
                  owner === "Player2" &&
                  isPlayer1Turn &&
                  !event.target.classList.contains("hit") &&
                  !isGameOver
                ) {
                  event.target.classList.add("hit");
                  const newShips = setShipSunk(
                    event.target.classList,
                    owner,
                    ownerShips
                  );
                  setTimeout(() => {
                    dispatch(toggleIsPlayer1Turn());
                    randomHit("Player1");
                  }, 2000);
                  dispatch(toggleIsPlayer1Turn());
                  dispatch(
                    setShips({
                      shipsNumber: 2,
                      content: [...newShips],
                    })
                  );
                }
              }}
            />
          ))}
      </Container>
    </Wrapper>
  );
};
