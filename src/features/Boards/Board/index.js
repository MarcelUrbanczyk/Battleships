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
import { getBlockColor } from "../../getBlockColor";
import { setShipSunk } from "../../setShipSunk";
import { getShipByName } from "../../getShip";
import { initialShips } from "../../initialShips";
import { initialBoard } from "../../initialBoard";
import { useDispatch, useSelector } from "react-redux";
import {
  setShips,
  toggleIsGameStarted,
  toggleIsPlayer1Turn,
  setBoard,
  selectDraggedShip,
  selectFlip,
  selectIsGameStarted,
  selectIsPlayer1Turn,
} from "../../gameSlice";
import { randomHit } from "../../randomHit";

export default ({ owner, ownerBoard, ownerShips }) => {
  const dispatch = useDispatch();
  const draggedShip = useSelector(selectDraggedShip);
  const flip = useSelector(selectFlip);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isPlayer1Turn = useSelector(selectIsPlayer1Turn);

  useEffect(() => {
    if (owner === "Player2") {
      const randomBoard = placeShipsRandomly();
      dispatch(setBoard({ boardNumber: 2, content: [...randomBoard] }));
    }
  }, []);

  return (
    <Wrapper>
      <Owner>{owner}</Owner>
      <Container>
        {ownerBoard &&
          ownerBoard.map((shipName, index) => (
            <Block
              key={index}
              id={index + 1}
              className={`${shipName ? shipName : ""} ${owner}`}
              style={{
                backgroundColor: getBlockColor(
                  owner,
                  ownerShips,
                  index + 1,
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
                  !event.target.classList.contains("hit")
                ) {
                  event.target.classList.add("hit");
                  dispatch(
                    setShips({
                      shipsNumber: 2,
                      content: [
                        ...setShipSunk(
                          event.target.classList,
                          owner,
                          ownerShips
                        ),
                      ],
                    })
                  );
                  dispatch(toggleIsPlayer1Turn());
                  setTimeout(() => {
                    randomHit("Player 1");
                  }, 2000);
                  dispatch(toggleIsPlayer1Turn());
                }
              }}
            />
          ))}
      </Container>
      <Buttons>
        {owner === "Player1" && !isGameStarted ? (
          <>
            <RestartButton
              onClick={() => {
                if (owner === "Player1") {
                  dispatch(
                    setShips({
                      shipsNumber: 1,
                      content: [...setIsDroppedFalse(initialShips)],
                    })
                  );
                  dispatch(
                    setBoard({
                      boardNumber: 1,
                      content: [...initialBoard],
                    })
                  );
                } else {
                  dispatch(
                    setShips({
                      shipsNumber: 2,
                      content: [...setIsDroppedFalse(initialShips)],
                    })
                  );
                  dispatch(
                    setBoard({
                      boardNumber: 2,
                      content: [...initialBoard],
                    })
                  );
                }
              }}
            />
            <ReadyButton
              disabled={!isEveryShipDropped(ownerShips)}
              onClick={() => {
                dispatch(toggleIsGameStarted());
              }}
            >
              Ready
            </ReadyButton>
            <RandomButton
              onClick={() => {
                if (owner === "Player1") {
                  dispatch(
                    setShips({
                      shipsNumber: 1,
                      content: [...setIsDroppedTrue(initialShips)],
                    })
                  );
                  dispatch(
                    setBoard({
                      boardNumber: 1,
                      content: placeShipsRandomly(),
                    })
                  );
                } else {
                  dispatch(
                    setShips({
                      shipsNumber: 2,
                      content: [...setIsDroppedTrue(initialShips)],
                    })
                  );
                  dispatch(
                    setBoard({
                      boardNumber: 2,
                      content: placeShipsRandomly(),
                    })
                  );
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
