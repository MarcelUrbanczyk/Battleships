import { Controls, RestartButton, ReadyButton, RandomButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShips1,
  selectShips2,
  setBoard,
  setShips,
  toggleIsGameStarted,
} from "../gameSlice";
import { placeShipsRandomly } from "../utils/placeShips";
import { setIsDroppedFalse, setIsDroppedTrue } from "../utils/setIsDropped";
import { isEveryShipDropped } from "../utils/isEveryShipDropped";
import { initialBoard } from "../initialBoard";
import { initialShips } from "../initialShips";

export default (owner) => {
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const dispatch = useDispatch();

  if (owner.owner === "Player 1") {
    return (
      <Controls>
        <RestartButton
          onClick={() => {
            dispatch(
              setShips({
                shipsNumber: 1,
                content: [...setIsDroppedFalse(ships1)],
              })
            );
            dispatch(
              setBoard({
                boardNumber: 1,
                content: [...initialBoard],
              })
            );
          }}
        />
        <ReadyButton
          disabled={!isEveryShipDropped(ships1)}
          onClick={() => {
            dispatch(toggleIsGameStarted());
          }}
        >
          Ready
        </ReadyButton>
        <RandomButton
          onClick={() => {
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
          }}
        />
      </Controls>
    );
  } else {
    return (
      <Controls>
        <RestartButton
          onClick={() => {
            dispatch(
              setShips({
                shipsNumber: 2,
                content: [...setIsDroppedFalse(ships2)],
              })
            );
            dispatch(
              setBoard({
                boardNumber: 2,
                content: [...initialBoard],
              })
            );
          }}
        />
        <ReadyButton
          disabled={!isEveryShipDropped(ships2)}
          onClick={() => {
            dispatch(toggleIsGameStarted());
          }}
        >
          Ready
        </ReadyButton>
        <RandomButton
          onClick={() => {
            dispatch(
              setShips({
                shipsNumber: 2,
                content: [...setIsDroppedTrue(ships2)],
              })
            );
            dispatch(
              setBoard({
                boardNumber: 2,
                content: placeShipsRandomly(),
              })
            );
          }}
        />
      </Controls>
    );
  }
};
