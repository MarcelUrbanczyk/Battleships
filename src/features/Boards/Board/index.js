import { Container, Block, Owner, Wrapper } from "./styled";

export default ({ owner }) => (
  <Wrapper>
    <Owner>{owner}</Owner>
    <Container>
      {Array.from({ length: 100 }, (_, index) => (
        <Block key={index}></Block>
      ))}
    </Container>
  </Wrapper>
);
