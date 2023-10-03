import { Container, FlipButton, ShipWrapper, Header } from "./styled";
import { Thunder, Wrecker, Destroyer, Liberty, Sapphire } from "./ships";
import { useState } from "react";

export default () => {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <Header>Ships</Header>
      <Container>
        <ShipWrapper>
          <Thunder draggable flipped={flip} />
          <Destroyer draggable flipped={flip} />
          <Wrecker draggable flipped={flip} />
          <Liberty draggable flipped={flip} />
          <Sapphire draggable flipped={flip} />
        </ShipWrapper>
        <FlipButton
          onClick={() => {
            setFlip(!flip);
          }}
        />
      </Container>
    </>
  );
};
