import { Container, Paragraph, Header, Wrapper } from "./styled";
import { Button } from "../../common/button";
import { useDispatch } from "react-redux";
import { setGameMode } from "../gameSlice";

export default () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>Welcome!</Header>
      <Paragraph>Choose game mode:</Paragraph>
      <Wrapper>
        <Button
          onClick={() => {
            dispatch(setGameMode("simulation"));
          }}
        >
          Simulation
        </Button>
        <Button
          onClick={() => {
            dispatch(setGameMode("singleplayer"));
          }}
        >
          Singleplayer
        </Button>
        <Button
          onClick={() => {
            dispatch(setGameMode("multiplayer"));
          }}
        >
          Multiplayer
        </Button>
      </Wrapper>
    </Container>
  );
};
