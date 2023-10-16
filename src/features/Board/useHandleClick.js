import { useDispatch, useSelector } from "react-redux";
import { setShipSunk } from "../utils/setShipSunk";
import {
  selectGameMode,
  selectIsGameOver,
  selectIsGameStarted,
  selectIsPlayer1Turn,
  selectShips1,
  selectShips2,
  setShips,
} from "../gameSlice";
import { toggleIsPlayer1Turn } from "../gameSlice";
import { randomHit } from "../utils/randomHit";

const useHandleClick = () => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector(selectIsGameStarted);
  const isPlayer1Turn = useSelector(selectIsPlayer1Turn);
  const isGameOver = useSelector(selectIsGameOver);
  const gameMode = useSelector(selectGameMode);
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);

  const handleClick = (owner, blockClassList, blockId) => {
    if (
      isGameStarted &&
      owner === "Player 2" &&
      isPlayer1Turn &&
      blockClassList &&
      !blockClassList.contains("hit") &&
      !isGameOver &&
      gameMode === "singleplayer"
    ) {
      blockClassList.add("hit");
      dispatch(
        setShips({
          shipsNumber: 2,
          content: [...setShipSunk(blockClassList, owner, ships2)],
        })
      );
      dispatch(toggleIsPlayer1Turn());
      setTimeout(() => {
        const randomHitShips = randomHit("Player 1", ships1);
        if (randomHitShips) {
          dispatch(
            setShips({
              shipsNumber: 1,
              content: [...randomHitShips],
            })
          );
        }
        dispatch(toggleIsPlayer1Turn());
      }, 2000);
    } else if (
      (isGameStarted &&
        !blockClassList.contains("hit") &&
        !isGameOver &&
        gameMode === "multiplayer" &&
        isPlayer1Turn &&
        blockId > 100) ||
      (isGameStarted &&
        !blockClassList.contains("hit") &&
        !isGameOver &&
        gameMode === "multiplayer" &&
        !isPlayer1Turn &&
        blockId <= 100)
    ) {
      blockClassList.add("hit");
      let newShips;
      if (owner === "Player 1") {
        newShips = setShipSunk(blockClassList, owner, ships1);
        dispatch(
          setShips({
            shipsNumber: 1,
            content: [...newShips],
          })
        );
      } else if (owner === "Player 2") {
        newShips = setShipSunk(blockClassList, owner, ships2);
        dispatch(
          setShips({
            shipsNumber: 2,
            content: [...newShips],
          })
        );
      }
      dispatch(toggleIsPlayer1Turn());
    }
  };

  return handleClick;
};

export default useHandleClick;
