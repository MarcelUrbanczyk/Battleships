import { Wrapper } from "./styled";
import Board from "./Board";
import { useSelector } from "react-redux";
import {
  selectBoard1,
  selectShips1,
  selectBoard2,
  selectShips2,
} from "../gameSlice";
export default () => {
  const ships1 = useSelector(selectShips1);
  const ships2 = useSelector(selectShips2);
  const board1 = useSelector(selectBoard1);
  const board2 = useSelector(selectBoard2);
  return (
    <Wrapper>
      <Board owner="Player1" ownerBoard={board1} ownerShips={ships1} />
      <Board owner="Player2" ownerBoard={board2} ownerShips={ships2} />
    </Wrapper>
  );
};
