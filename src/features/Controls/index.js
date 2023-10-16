import { ButtonImage, Controls, GameControlButton } from "./styled";
import { Button } from "../../common/button";
import { useDispatch, useSelector } from "react-redux";
import DiceIcon from "../../icons/diceIcon.svg";
import RestartIcon from "../../icons/restartIcon.svg";

import {
  selectGameMode,
  selectIsPlayer1BoardSet,
  selectShips1,
  selectShips2,
  setBoard,
  setShips,
  toggleIsGameStarted,
  toggleIsPlayerBoardSet,
} from "../gameSlice";
import { placeShipsRandomly } from "../utils/placeShips";
import { setIsDroppedFalse, setIsDroppedTrue } from "../utils/setIsDropped";
import { isEveryShipDropped } from "../utils/isEveryShipDropped";
import { initialBoard } from "../initialBoard";
import { initialShips } from "../initialShips";

export default (owner) => {
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const gameMode = useSelector(selectGameMode);
  const isPlayer1BoardSet = useSelector(selectIsPlayer1BoardSet);
  const dispatch = useDispatch();

  if (owner.owner === "Player 1") {
    return (
      <Controls>
        <GameControlButton
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
        >
          <ButtonImage src={RestartIcon} />
        </GameControlButton>
        <Button
          disabled={!isEveryShipDropped(ships1)}
          onClick={() => {
            if (gameMode !== "multiplayer") {
              dispatch(toggleIsGameStarted());
            } else if (gameMode === "multiplayer" && !isPlayer1BoardSet) {
              dispatch(toggleIsPlayerBoardSet(1));
            } else if (gameMode === "multiplayer" && isPlayer1BoardSet) {
              dispatch(toggleIsPlayerBoardSet(2));
            }
          }}
        >
          Ready
        </Button>
        <GameControlButton
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
        >
          <ButtonImage src={DiceIcon} />
        </GameControlButton>
      </Controls>
    );
  } else {
    return (
      <Controls>
        <GameControlButton
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
        >
          <ButtonImage src={RestartIcon} />
        </GameControlButton>
        <Button
          disabled={!isEveryShipDropped(ships2)}
          onClick={() => {
            dispatch(toggleIsGameStarted());
          }}
        >
          Ready
        </Button>
        <GameControlButton
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
        >
          <ButtonImage src={DiceIcon} />
        </GameControlButton>
      </Controls>
    );
  }
};
