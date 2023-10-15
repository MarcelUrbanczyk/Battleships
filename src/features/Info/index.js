import { useDispatch, useSelector } from "react-redux";
import {
  selectGameMode,
  selectIsGameOver,
  selectIsGameStarted,
  selectIsPlayer1Turn,
  selectWinner,
  setInitialState,
} from "../gameSlice";
import { Info, Wrapper } from "./styled";
import { Button } from "../../common/button";

export default () => {
  const isPlayer1Turn = useSelector(selectIsPlayer1Turn);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const gameMode = useSelector(selectGameMode);
  const winner = useSelector(selectWinner);
  const dispatch = useDispatch();
  let message;
  if (!isGameStarted && gameMode !== "simulation") {
    message = "Set your board";
  } else if (
    (isGameStarted && isPlayer1Turn && !isGameOver) ||
    (gameMode === "simulation" && isPlayer1Turn && !winner)
  ) {
    message = "Player's 1 turn";
  } else if (
    (isGameStarted && !isPlayer1Turn && !isGameOver) ||
    (gameMode === "simulation" && !isPlayer1Turn && !isGameOver)
  ) {
    message = "Player's 2 turn";
  } else if (winner && isGameOver) {
    message = `${winner} won!`;
  }

  return (
    <Wrapper>
      <Info>{message}</Info>
      {isGameOver ? (
        <Button
          onClick={() => {
            dispatch(setInitialState());
          }}
        >
          Play again
        </Button>
      ) : (
        ""
      )}
    </Wrapper>
  );
};
