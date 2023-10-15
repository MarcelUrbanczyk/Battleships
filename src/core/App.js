import { Header } from "../common/header";
import { Main } from "../common/main";
import Info from "../features/Info";
import ShipCollection from "../features/ShipCollection";
import Controls from "../features/Controls";
import Board from "../features/Board";
import ShipsStatus from "../features/ShipsStatus";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBoard1,
  selectBoard2,
  selectGameMode,
  selectIsGameStarted,
  selectShips1,
  selectShips2,
} from "../features/gameSlice";
const App = () => {
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const board1 = useSelector(selectBoard1);
  const board2 = useSelector(selectBoard2);
  const isGameStarted = useSelector(selectIsGameStarted);
  const gameMode = useSelector(selectGameMode);

  return (
    <>
      <Header>Battleships</Header>
      <Main>
        <span>
          <Board
            owner="Player 1"
            enemy="Player 2"
            ownerBoard={board1}
            ownerShips={ships1}
          />
          {isGameStarted || gameMode === "simulation" ? (
            <ShipsStatus owner="Player 1" />
          ) : (
            ""
          )}
          {(gameMode === "singleplayer" && !isGameStarted) ||
          (gameMode === "multiplayer" && !isGameStarted) ? (
            <>
              <Controls owner="Player 1" /> <ShipCollection owner="Player 1" />{" "}
            </>
          ) : (
            ""
          )}
        </span>
        <Info />
        <span>
          <Board
            owner="Player 2"
            enemy="Player 1"
            ownerBoard={board2}
            ownerShips={ships2}
          />
          {isGameStarted || gameMode === "simulation" ? (
            <ShipsStatus owner="Player 2" />
          ) : (
            ""
          )}
          {gameMode === "multiplayer" && !isGameStarted ? (
            <>
              <Controls owner="Player 2" /> <ShipCollection owner="Player 2" />{" "}
            </>
          ) : (
            ""
          )}
        </span>
      </Main>
    </>
  );
};

export default App;
