import { Wrapper } from "./styled";
import Board from "./Board";
export default () => (
  <Wrapper>
    <Board owner="Player 1" />
    <Board owner="Player 2" />
  </Wrapper>
);
