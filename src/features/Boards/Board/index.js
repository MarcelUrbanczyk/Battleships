import { Container, Block } from "./styled";

export default () => (
  <Container>
    {Array.from({ length: 100 }, (_, index) => (
      <Block key={index}></Block>
    ))}
  </Container>
);
