import { Header } from "../features/header";
import { Main } from "../features/main";
import GamePanel from "../features/GamePanel";
import ShipCollection from "../features/ShipCollection";
import Controls from "../features/Controls";
import Board from "../features/Board";
import Start from "../features/Start";
import ShipsStatus from "../features/ShipsStatus";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBoard1,
  selectBoard2,
  selectGameMode,
  selectIsGameStarted,
  selectShips1,
  selectShips2,
  selectIsPlayer1BoardSet,
  selectIsPlayer2BoardSet,
  toggleIsGameStarted,
} from "../features/gameSlice";
import { SetBoardWrapper } from "../features/setBoardWrapper";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const board1 = useSelector(selectBoard1);
  const board2 = useSelector(selectBoard2);
  const isGameStarted = useSelector(selectIsGameStarted);
  const gameMode = useSelector(selectGameMode);
  const isPlayer1BoardSet = useSelector(selectIsPlayer1BoardSet);
  const isPlayer2BoardSet = useSelector(selectIsPlayer2BoardSet);

  useEffect(() => {
    if (isPlayer1BoardSet && isPlayer2BoardSet) {
      dispatch(toggleIsGameStarted());
    }
  }, [isPlayer1BoardSet, isPlayer2BoardSet]);

  if (
    (gameMode && gameMode !== "multiplayer") ||
    (gameMode === "multiplayer" && isGameStarted)
  ) {
    return (
      <>
        <Header>Battleships</Header>
        <Main>
          <span>
            <Board owner="Player 1" ownerBoard={board1} ownerShips={ships1} />
            {isGameStarted || gameMode === "simulation" ? (
              <ShipsStatus owner="Player 1" />
            ) : (
              ""
            )}
            {(gameMode === "singleplayer" && !isGameStarted) ||
            (gameMode === "multiplayer" && !isGameStarted) ? (
              <>
                <Controls owner="Player 1" />{" "}
                <ShipCollection owner="Player 1" />{" "}
              </>
            ) : (
              ""
            )}
          </span>
          <GamePanel />
          <span>
            <Board owner="Player 2" ownerBoard={board2} ownerShips={ships2} />
            {isGameStarted || gameMode === "simulation" ? (
              <ShipsStatus owner="Player 2" />
            ) : (
              ""
            )}
            {gameMode === "multiplayer" && !isGameStarted ? (
              <>
                <Controls owner="Player 2" />{" "}
                <ShipCollection owner="Player 2" />{" "}
              </>
            ) : (
              ""
            )}
          </span>
        </Main>
      </>
    );
  } else if (gameMode === "multiplayer") {
    return (
      <>
        <Header>Battleships</Header>
        <Main>
          {isPlayer1BoardSet ? (
            <SetBoardWrapper>
              <Board
                owner="Player 2"
                ownerBoard={board2}
                ownerShips={ships2}
                header="Player 2, set your board"
              />
              <Controls owner="Player 2" />
              <ShipCollection owner="Player 2" />
            </SetBoardWrapper>
          ) : (
            <SetBoardWrapper>
              <Board
                owner="Player 1"
                ownerBoard={board1}
                ownerShips={ships1}
                header="Player 1, set your board"
              />
              <Controls owner="Player 1" />
              <ShipCollection owner="Player 1" />
            </SetBoardWrapper>
          )}
        </Main>
      </>
    );
  } else if (!gameMode) {
    return (
      <>
        <Header>Battleships</Header>
        <Main>
          <Start />
        </Main>
      </>
    );
  }
};

export default App;
